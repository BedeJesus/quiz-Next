"use client"
import api from '@/utils/api'
import { useState } from 'react'
import { Container, StyledLink, Button, Form, Input, InputRadio } from './styles'

export default function Register() {

    const [question, setQuestion] = useState({})
    let msgType = 'success'

    function handleOnChange(e) {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        registerQuestion(question)
        console.log(question)
    }

    async function registerQuestion(question) {

        question.group = 'teste' //mudar depois

        const data = await api.post('questions/create', question)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                msgType = 'error'
                return err.response.data
            })

        window.alert(data.message)
    }

    return (
        <>

            <StyledLink href='/'>Voltar</StyledLink>

            <Container>
                <div className="register">

                    <h1>Faça o cadastro de uma pergunta</h1>

                    <Form onSubmit={handleSubmit}>
                        <label>Questão:</label>
                        <Input type="text" placeholder="Digite sua questão" name='title' onChange={handleOnChange} />

                        <label>Primeira resposta:</label>
                        <Input type="text" placeholder="Digite a primeira resposta" name='first_answer' onChange={handleOnChange} />

                        <label>Segunda resposta:</label>
                        <Input type="text" placeholder="Digite a segunda resposta" name='second_answer' onChange={handleOnChange} />

                        <label>Terceira resposta:</label>
                        <Input type="text" placeholder="Digite a terceira resposta" name='third_answer' onChange={handleOnChange} />

                        <label>Quarta resposta:</label>
                        <Input type="text" placeholder="Digite a quarta resposta" name='forth_answer' onChange={handleOnChange} />

                        <label>Qual é a resposta correta?</label>

                        <div className='radio'>
                            <div className='option'>
                                <InputRadio type="radio" name='correct_answer' value={1} onChange={handleOnChange} />
                                <label htmlFor="option1">1</label>
                            </div>

                            <div className='option'>
                                <InputRadio type="radio" name='correct_answer' value={2} onChange={handleOnChange} />
                                <label htmlFor="option2">2</label>
                            </div>

                            <div className='option'>
                                <InputRadio type="radio" name='correct_answer' value={3} onChange={handleOnChange} />
                                <label htmlFor="option3">3</label>
                            </div >

                            <div className='option' >
                                <InputRadio type="radio" name='correct_answer' value={4} onChange={handleOnChange} />
                                <label htmlFor="option4">4</label>
                            </div>
                        </div>

                        <Button type="submit">Cadastrar </Button>
                    </Form>
                </div>

            </Container>

        </>
    )

}