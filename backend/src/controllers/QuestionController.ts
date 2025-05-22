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

        console.log("QUESTIONS", questions);

        try {

            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];

                if (!question.title) {
                    res.status(422).json({ message: `Faltando título da pergunta ${i + 1}` });
                    return
                }

                if (!question.firstAnswer) {
                    res.status(422).json({ message: `Faltando primeira resposta da pergunta ${i + 1}` });
                    return
                }

                if (!question.secondAnswer) {
                    res.status(422).json({ message: `Faltando segunda resposta da pergunta ${i + 1}` });
                    return
                }

                if (!question.thirdAnswer) {
                    res.status(422).json({ message: `Faltando terceira resposta da pergunta ${i + 1}` });
                    return
                }

                if (!question.fourthAnswer) {
                    res.status(422).json({ message: `Faltando quarta resposta da pergunta ${i + 1}` });
                    return
                }

                if (question.correctAnswer == null) {
                    res.status(422).json({ message: `Faltando resposta correta da pergunta ${i + 1}` });
                    return
                }

                if (question.correctAnswer < 1 || question.correctAnswer > 4) {
                    res.status(422).json({ message: `Resposta correta da pergunta ${i + 1} deve ser entre 1 e 4` });
                    return
                }

                const existingQuestion = await prisma.question.findFirst({
                    where: { title: question.title }
                });

                if (existingQuestion) {
                    res.status(422).json({ message: `A pergunta ${i + 1} já existe` });
                    return
                }
            }

            if (!name) {
                res.status(422).json({ message: "Faltando nome do quiz" });
                return
            }

            const existingQuiz = await prisma.quiz.findFirst({
                where: { name }
            });

            if (existingQuiz) {
                res.status(422).json({ message: "Já existe um quiz com esse nome" });
                return
            }

            const questionNumber = questions.length;

            const quiz = await prisma.quiz.create({
                data: {
                    name,
                    questionNumber,
                    questions: {
                        create: questions.map((q: Question) => ({
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

            res.status(201).json({ message: 'Quiz cadastrado com sucesso!', quiz });
            return

        } catch (err) {
            res.status(500).json({ message: "Erro no servidor", error: err });
            return
        }
    }

    static async getAll(req: Request, res: Response) {
        const questions = await prisma.question.findMany({});

        res.status(200).json({
            questions: questions
        })

    }

    static async getTen(req: Request, res: Response) {
        let name = req.query.name != "random" && typeof req.query.name === 'string' ? req.query.name : false;

        const quizResult = name ? await prisma.quiz.findUnique({
            where: { name },
            select: { questions: true }
        }) : null;

        const questions = quizResult?.questions || await prisma.question.findMany({
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

            let quizzes = quizzesResult.map(g => g.name);
            res.status(200).json({ quizzes });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os grupos", error: err });
        }
    }

}
