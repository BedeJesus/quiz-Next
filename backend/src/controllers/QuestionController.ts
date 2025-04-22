import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export interface Question {
    group: string;
    title: string;
    firstAnswer: string;
    secondAnswer: string;
    thirdAnswer: string;
    fourthAnswer: string;
    correctAnswer: number;
}


export default class QuestionController {

    static async create(req: Request, res: Response) {
        const questions: Question[] = req.body.questions;
        const { name } = req.body;

        try {

            for (const question of questions) {

                if (!question.title) return res.status(422).json({ message: "Faltando título" });
                if (!question.firstAnswer) return res.status(422).json({ message: "Faltando primeira resposta" });
                if (!question.secondAnswer) return res.status(422).json({ message: "Faltando segunda resposta" });
                if (!question.thirdAnswer) return res.status(422).json({ message: "Faltando terceira resposta" });
                if (!question.fourthAnswer) return res.status(422).json({ message: "Faltando quarta resposta" });
                if (question.correctAnswer == null) return res.status(422).json({ message: "Faltando resposta correta" });
                if (question.correctAnswer < 1 || question.correctAnswer > 4) return res.status(422).json({ message: "Resposta correta deve ser entre 1 e 4" });

                const existingQuestion = await prisma.question.findFirst({
                    where: { title: question.title }
                });

                if (existingQuestion) return res.status(422).json({ message: "Essa questão já existe" });

            }

            if (!name) return res.status(422).json({ message: "Faltando nome do quiz" });

            const existingQuiz = await prisma.quiz.findFirst({
                where: { name }
            });

            if (existingQuiz) return res.status(409).json({ message: "Já existe um quiz com esse nome" });


            const questionNumber = questions.length;

            const quiz = await prisma.quiz.create({
                data: {
                    name,
                    questionNumber,
                    questions: {
                        create: questions.map((q: any) => ({
                            group: q.group,
                            title: q.title,
                            firstAnswer: q.firstAnswer,
                            secondAnswer: q.secondAnswer,
                            thirdAnswer: q.thirdAnswer,
                            fourthAnswer: q.fourthAnswer,
                            correctAnswer: q.correctAnswer
                        }))
                    }
                },
            });

            return res.status(201).json({ message: 'Quiz cadastrado com sucesso!', quiz });

        } catch (err) {
            return res.status(500).json({ message: "Erro no servidor", error: err });
        }
    }


    static async getAll(req: Request, res: Response) {
        const questions = await prisma.question.findMany({});

        res.status(200).json({
            questions: questions
        })
    }

    static async getTen(req: Request, res: Response) {
        let name = req.params.name ? req.params.name : false

        const questions = name ? await prisma.quiz.findMany({
            where: { name },
        }) : await prisma.question.findMany({
            take: 5
        });
        res.status(200).json({
            quiz: {
                questions: questions,
                name: name ? name : "Aleatório"
            }
        })
    }

    static async getQuizOptions(req: Request, res: Response) {
        try {
            let quizzesResult = await prisma.quiz.findMany({
                select: { name: true },
                distinct: ['name']
            });

            console.log('1')

            let quizzes = quizzesResult.map(g => g.name);
            res.status(200).json({ quizzes });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os grupos", error: err });
        }
    }

}












