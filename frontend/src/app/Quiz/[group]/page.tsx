"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react'
import api from "@/utils/api";
import { Container, StyledLink, Form, Button, Question, Answers, Title, Buttons, ButtonsRadio, Result } from './styles'
import Loader from '../../../components/Loader/Loader';
import { Question as QuestionInterface } from '../../../interfaces/interfaces'

export default function QuizPage() {
    const params = useParams();
    const group = params.group

    const [questions, setQuestions] = useState<QuestionInterface[]>([])
    const [count, setCount] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [answers, setAnswers] = useState<number[]>([])

    useEffect(() => {
        api.get('/questions/ten', { params: { group } }).then((response) => {
            setQuestions(response.data.questions)
        })
    }, [])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (answers[count] == questions[count].correctAnswer) {
            setScore(state => state + 1)
        }


        setCount(state => state + 1)
    }


    function Message() {
        if (score <= 2) {
            return 'Vamos fingir que não aconteceu...'
        } else if (score <= 4) {
            return 'Vamos melhorar!'
        } else if (score <= 6) {
            return 'Ok Ok, está bom!'
        } else if (score <= 8) {
            return 'Mandou bem!'
        } else if (score > 8) {
            return 'Parabéns!!!'
        }
    }

    function handleAnswerClick(value: number) {

        let newAnswer = [...answers];
        newAnswer[count] = value;
        setAnswers(newAnswer);
    }

    return (

        <Container>
            <StyledLink href='/'>Voltar</StyledLink>


            <div className="question">

                {questions.length === 10 && count <= 9 &&

                    <>

                        <Question>Questão {count + 1}</Question>
                        <Form onSubmit={handleSubmit}>
                            <Title>{questions[count].title}</Title>

                            <Answers>
                                <ButtonsRadio type="button" onClick={() => handleAnswerClick(1)} selected={answers[count] === 1}>1</ButtonsRadio>
                                {questions[count].firstAnswer}
                            </Answers>

                            <Answers>
                                <ButtonsRadio type="button" onClick={() => handleAnswerClick(2)} selected={answers[count] === 2}>2</ButtonsRadio>
                                {questions[count].secondAnswer}</Answers>

                            <Answers>
                                <ButtonsRadio type="button" onClick={() => handleAnswerClick(3)} selected={answers[count] === 3}>3</ButtonsRadio>
                                {questions[count].thirdAnswer}
                            </Answers>

                            <Answers>
                                <ButtonsRadio type="button" onClick={() => handleAnswerClick(4)} selected={answers[count] === 4}>4</ButtonsRadio>
                                {questions[count].fourthAnswer}
                            </Answers>

                            <Buttons>
                                {count > 0 ?
                                    <Button type="button" onClick={() => setCount(count - 1)}>Anterior</Button> : null
                                }

                                <Button type="submit">{count != 9 ? 'Próxima' : 'Responder'}</Button>
                            </Buttons>
                        </Form>
                    </>

                }

                {questions.length < 10 && (
                    <Loader />
                )}

                {count === 10 && (
                    <Result>
                        <h1>O seu resultado foi..</h1>

                        {score == 1 ? <h1>{score} ponto!</h1> : <h1>{score} pontos!</h1>}


                        <h2>{Message()}</h2>

                    </Result>
                )

                }

            </div>
        </Container>

    )
}
