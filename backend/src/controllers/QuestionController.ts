const QuestionModel = require('../models/Question')
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export interface Question {
    group: string;
    title: string;
    first_answer: string;
    second_answer: string;
    third_answer: string;
    fourth_answer: string;
    correct_answer: number;
}


export default class QuestionController {

    static async create(req: Request, res: Response) {
        const questions: Question[] = req.body;

        try {

            for (const question of questions) {
                if (!question.title) return res.status(422).json({ message: "Faltando título" });
                if (!question.first_answer) return res.status(422).json({ message: "Faltando primeira resposta" });
                if (!question.second_answer) return res.status(422).json({ message: "Faltando segunda resposta" });
                if (!question.third_answer) return res.status(422).json({ message: "Faltando terceira resposta" });
                if (!question.fourth_answer) return res.status(422).json({ message: "Faltando quarta resposta" });
                if (question.correct_answer == null) return res.status(422).json({ message: "Faltando resposta correta" });
                if (question.correct_answer < 1 || question.correct_answer > 4) return res.status(422).json({ message: "Resposta correta deve ser entre 1 e 4" });
                if (!question.group) return res.status(422).json({ message: "Faltando grupo" });    

                const existingQuestion = await prisma.question.findFirst({
                    where: { title: question.title }
                });

                if (existingQuestion) return res.status(422).json({ message: "Essa questão já existe" });

            }

            const savedQuestions = await prisma.question.createMany({
                data: questions.map((question) => ({
                    group: question.group,
                    title: question.title,
                    firstAnswer: question.first_answer,  
                    secondAnswer: question.second_answer,
                    thirdAnswer: question.third_answer,
                    fourthAnswer: question.fourth_answer,
                    correctAnswer: question.correct_answer
                }))
            });  

            return res.status(201).json({ message: 'Questões cadastradas com sucesso!', savedQuestions });

        } catch (err) {
            return res.status(500).json({ message: "Erro no servidor", error: err });
        }
    }


    static async getAll(req: Request, res: Response) {
        const questions = await prisma.question.findMany({
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json({
            questions: questions
        })
    }

    static async getTen(req: Request, res: Response) {
        let group = req.params.group ? req.params.group : false
        
        const questions = group ? await prisma.question.findMany({
            where: { group },
            orderBy: { createdAt: 'desc' },
            take: 10
        }) : await prisma.question.findMany({
            orderBy: { createdAt: 'desc' },
            take: 10
        });
        res.status(200).json({
            questions: questions
        })
    }

    static async getQuizOptions(req: Request, res: Response) {
        try {
            let groupsResult  = await prisma.question.findMany({
                select: { group: true },
                distinct: ['group']
            });

            let groups = groupsResult .map(g => g.group);
            res.status(200).json({ groups });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os grupos", error: err });
        }
    }

}












