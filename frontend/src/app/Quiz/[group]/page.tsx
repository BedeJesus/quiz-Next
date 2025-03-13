"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react'
import api from "@/utils/api";
import Link from "next/link";
import { Container, StyledLink, Form, Button, Question, Answers, Title, Buttons, ButtonsRadio } from './styles'

export default function QuizPage() {
    const params = useParams();
    const group = params.group;

    const [questions, setQuestions] = useState([])
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        api.get('/questions/ten', group).then((response) => {
            setQuestions(response.data.questions)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        if (answers[count] == questions[count].correct_answer) {
            setScore(state => state + 1)
        } else{
            setScore(state => state - 1)
        }

        setCount(state => state + 1)
    }


    function Message() {
        if (score <= 2) {
            return 'Vamos fingir que não aconteceu...'
        } else if (score <= 4) {
            return 'Da pra melhorar isso aí!'
        } else if (score <= 6) {
            return 'Ok né ta na média'
        } else if (score <= 8) {
            return 'Mandou bem!'
        } else if (score > 8) {
            return 'Parabéns nerdão!'
        }
    }

    function handleAnswerClick(value) {

        let newAnswer = [...answers];
        newAnswer[count] = value;
        setAnswers(newAnswer);
    }

    return (

        <>
            <StyledLink href='/'>Voltar</StyledLink>
            <Container>

                <div className="question">

                    {questions.length === 10 && count <= 9 &&

                        <>

                            <Question>Questão {count + 1}</Question>
                            <Form onSubmit={handleSubmit}>
                                <Title>{questions[count].title}</Title>

                                <Answers>
                                    <ButtonsRadio type="button" onClick={() => handleAnswerClick(1)} selected={answers[count] === 1}>1</ButtonsRadio>
                                    {questions[count].first_answer}
                                </Answers>

                                <Answers> 
                                    <ButtonsRadio type="button" onClick={() => handleAnswerClick(2)} selected={answers[count]  === 2}>2</ButtonsRadio>
                                 {questions[count].second_answer}</Answers>

                                 <Answers>
                                    <ButtonsRadio type="button" onClick={() => handleAnswerClick(3)} selected={answers[count]  === 3}>3</ButtonsRadio>
                                    {questions[count].third_answer}
                                </Answers>

                                <Answers>
                                    <ButtonsRadio type="button" onClick={() => handleAnswerClick(4)} selected={answers[count]  === 4}>4</ButtonsRadio>
                                    {questions[count].forth_answer}
                                </Answers>

                                <Buttons>
                                    {count > 0 ?
                                        <Button type="button" onClick={() => setCount(count - 1)}>Pergunta Anterior</Button> : null
                                    }

                                    <Button type="submit">{count != 10 ? 'Próxima Pergunta' : 'Responder'}</Button>
                                </Buttons>
                            </Form>
                        </>

                    }

                    {questions.length < 10 && (
                        <div className='no_questions'>
                            <h1>Não há questões cadastradas!</h1>
                            <h2>Cadastre pelo menos 10 questões para fazer o quiz</h2>
                        </div>

                    )}

                    {count === 10 && (
                        <div className="result">
                            <h1>O seu resultado foi..</h1>

                            <h1>{score} pontos!</h1>
                            <h2>{Message()}</h2>

                            <Link href='/'>Voltar ao Menu</Link>
                        </div>
                    )

                    }

                </div>
            </Container>

        </>

    )
}
