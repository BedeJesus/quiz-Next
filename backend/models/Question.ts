const mongooseSchema = require('../db/conn')
const { Schema } = mongooseSchema

const Question = mongooseSchema.model('Question', new Schema({
    group: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    first_answer: {
        type: String,
        required: true
    },
    second_answer: {
        type: String,
        required: true
    },
    third_answer: {
        type: String,
        required: true
    },
    forth_answer: {
        type: String,
        required: true
    },
    correct_answer: {
        type: Number,
        required: true
    }
},
    {timestamps:true}
))

module.exports = Question