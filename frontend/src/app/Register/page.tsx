"use client"
import api from '@/utils/api'
import { useState, useEffect } from 'react'
import { Container, StyledLink, Button, Form, Input, ButtonsRadio, GroupName, Buttons } from './styles'
import { Question } from '../../interfaces/interfaces'

export default function Register() {

    const [question, setQuestion] = useState<Question>({
        title: '',
        first_answer: '',
        second_answer: '',
        third_answer: '',
        forth_answer: '',
        correct_answer: 0
    });

    const [group, setGroup] = useState<string>('')
    const [questions, setQuestions] = useState<Question[]>([])
    const [questionCounter, setQuestionCounter] = useState<number>(1)
    let msgType = 'success'

    useEffect(() => {
        setQuestion(questions[questionCounter - 1] || {});
    }, [questionCounter]);


    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let newQuestions = [...questions];
        newQuestions[questionCounter - 1] = question;

        setQuestions(newQuestions);

        if (questionCounter === 10) {
            registerQuestions(newQuestions)
        } else {
            setQuestionCounter(questionCounter + 1);
        }
    }


    async function registerQuestions(questions:Question[]): Promise<void> {

        const questionsWithGroup = questions.map(question => ({
            ...question,
            group: group,
        }));

        const data = await api.post('questions/create', questionsWithGroup)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                msgType = 'error'
                return err.response.data
            })

        window.alert(data.message)  
    }

    function handleAnswerClick(value: number):void {
        setQuestion(prevState => ({ ...prevState, correct_answer: value }));
    }

    return (
        <Container>

            <StyledLink href='/'>Voltar</StyledLink>


            <div className="register">

                <GroupName type="text" placeholder="Digite o título do Quiz" name='group' value={group} onChange={(e) => setGroup(e.target.value)} />

                <Form onSubmit={handleSubmit}>
                    <label>Questão {questionCounter}:</label>
                    <Input type="text" placeholder="Digite sua questão" name='title' value={question.title || ""} onChange={handleOnChange} />

                    <label>Primeira resposta:</label>
                    <Input type="text" placeholder="Digite a primeira resposta" name='first_answer' value={question.first_answer || ""} onChange={handleOnChange} />

                    <label>Segunda resposta:</label>
                    <Input type="text" placeholder="Digite a segunda resposta" name='second_answer' value={question.second_answer || ""} onChange={handleOnChange} />

                    <label>Terceira resposta:</label>
                    <Input type="text" placeholder="Digite a terceira resposta" name='third_answer' value={question.third_answer || ""} onChange={handleOnChange} />

                    <label>Quarta resposta:</label>
                    <Input type="text" placeholder="Digite a quarta resposta" name='forth_answer' value={question.forth_answer || ""} onChange={handleOnChange} />

                    <label>Qual é a resposta correta?</label>

                    <div className='radio'>
                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(1)} selected={question.correct_answer === 1}>1</ButtonsRadio>
                        </div>

                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(2)} selected={question.correct_answer === 2}>2</ButtonsRadio>
                        </div>

                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(3)} selected={question.correct_answer === 3}>3</ButtonsRadio>
                        </div >

                        <div className='option' >
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(4)} selected={question.correct_answer === 4}>4</ButtonsRadio>
                        </div>
                    </div>

                    <Buttons>
                        {questionCounter > 1 ?
                            <Button type="button" onClick={() => setQuestionCounter(questionCounter - 1)}>Pergunta Anterior</Button> : null
                        }

                        <Button type="submit">{questionCounter != 10 ? 'Próxima Pergunta' : 'Cadastrar'}</Button>
                    </Buttons>

                </Form>
            </div>

        </Container>
    )

}