'use client'

import { useState } from 'react'
import { Container, StyledLink, Form, Button, Question, Answers, Title, Buttons, ButtonsRadio, Result } from './styles'
import { Question as QuestionInterface } from '../../../interfaces/interfaces'
import { ToastContainer, toast, Bounce } from 'react-toastify'

interface Props {
    questions: QuestionInterface[]
    quizName: string
}

export default function QuizClient({ questions }: Props) {
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState<number[]>([])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (answers[count] === questions[count].correctAnswer) {
            setScore(score + 1)
        }

        setCount(count + 1)
    }

    function handleAnswerClick(value: number) {
        const newAnswers = [...answers]
        newAnswers[count] = value
        setAnswers(newAnswers)
    }

    function Message() {
        const percentage = (score / questions.length) * 100;

        if (percentage < 30) return 'Vamos fingir que não aconteceu...';
        if (percentage < 50) return 'Vamos melhorar!';
        if (percentage < 70) return 'Ok Ok, está bom!';
        if (percentage < 90) return 'Mandou bem!';
        return 'Parabéns!!!';
    }

    return (
        <Container>
            <StyledLink href='/'>Voltar</StyledLink>
            <ToastContainer />

            <div className="question">

                {count <= questions.length - 1 && (
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
                                {count > 0 && (
                                    <Button type="button" onClick={() => setCount(count - 1)}> Anterior </Button>
                                )}
                                <Button type="submit">{count !== questions.length - 1 ? 'Próxima' : 'Responder'}</Button>
                            </Buttons>
                        </Form>
                    </>
                )}

                {count === questions.length && (

                    <Result>
                        <h1>O seu resultado foi...</h1>
                        <h1>{score} {score === 1 ? 'ponto' : 'pontos'}!</h1>
                        <h2>{Message()}</h2>
                    </Result>
                    
                )}
            </div>
        </Container>
    )
}
