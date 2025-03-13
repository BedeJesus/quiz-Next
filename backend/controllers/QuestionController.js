const Question = require('../models/Question')

const ObjectId = require('mongoose').Types.ObjectId

module.exports = class ItemController {

    //create question
    static async create(req, res) {
        const { group, title, first_answer, second_answer, third_answer, forth_answer, correct_answer } = req.body

        const questions = req.body

        //validations
        try {

        if (questions.find(question => !question.group)) {
            res.status(422).json({ message: "Faltando Grupo" })
            return
        }

        if (questions.find(question => !question.title)) {
            res.status(422).json({ message: "Faltando Titulo" })
            return
        }

        if (questions.find(question => !question.first_answer)) {
            res.status(422).json({ message: "Faltando primeira resposta" })
            return
        }

        if (questions.find(question => !question.second_answer)) {
            res.status(422).json({ message: "Faltando segunda resposta" })
            return
        }

        if (questions.find(question => !question.third_answer)) {
            res.status(422).json({ message: "Faltando terceira resposta" })
            return
        }

        if (questions.find(question => !question.forth_answer)) {
            res.status(422).json({ message: "Faltando quarta resposta" })
            return
        }

        if (questions.find(question => !question.correct_answer)) {
            res.status(422).json({ message: "Faltando resposta correta" })
            return
        }

        for (let i = 0; i < questions.length; i++) {
            const { group, title } = questions[i]; 
            
            const existingQuestion = await Question.findOne({ group, title });

            if (existingQuestion) {
                return res.status(422).json({ message: `A questão com título "${title}" já existe no grupo "${group}"` });
            }
        }

        const savedQuestions = await Question.insertMany(questions);
        return res.status(201).json({
            message: 'Questões cadastradas com sucesso!',
            savedQuestions
        });
    
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }


    //get all questions

    static async getAll(req, res) {
        const questions = await Question.find().sort('-createAt')
        res.status(200).json({
            questions: questions
        })
    }

    //get ten questions

    static async getTen(req, res) {
        let group = req.params.group? group : null
        const questions = group ?  Question.find({ group }) : await Question.aggregate([{ $sample: { size: 10 } }])
        res.status(200).json({
            questions: questions
        })
    }

    static async getQuizOptions(req, res) {
        try {
            const groups = await Question.distinct("group");
            res.status(200).json({ groups });
        } catch (err) {
            res.status(500).json({ message: "Erro ao buscar os grupos", error: err });
        }
    }

}












