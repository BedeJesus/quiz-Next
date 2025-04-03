const QuestionModel = require('../models/Question')
import { Request, Response } from 'express';

export interface Question {
    title: string;
    first_answer: string;
    second_answer: string;
    third_answer: string;
    forth_answer: string;
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
                if (!question.forth_answer) return res.status(422).json({ message: "Faltando quarta resposta" });
                if (question.correct_answer == null) return res.status(422).json({ message: "Faltando resposta correta" });

                const existingQuestion = await QuestionModel.findOne({ title: question.title });
                if (existingQuestion) {
                    return res.status(422).json({ message: `A questão "${question.title}" já existe` });
                }
            }

            const savedQuestions = await QuestionModel.insertMany(questions);
            return res.status(201).json({ message: 'Questões cadastradas com sucesso!', savedQuestions });

        } catch (err) {
            return res.status(500).json({ message: "Erro no servidor", error: err });
        }
    }


    static async getAll(req: Request, res: Response) {
        const questions = await QuestionModel.find().sort('-createAt')
        res.status(200).json({
            questions: questions
        })
    }

    static async getTen(req: Request, res: Response) {
        let group = req.params.group ? req.params.group : false
        const questions = group ? QuestionModel.find({ group }) : await QuestionModel.aggregate([{ $sample: { size: 10 } }])
        res.status(200).json({
            questions: questions
        })
    }

    static async getQuizOptions(req: Request, res: Response) {
        try {
            const groups = await QuestionModel.distinct("group");
            res.status(200).json({ groups });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os grupos", error: err });
        }
    }

}












