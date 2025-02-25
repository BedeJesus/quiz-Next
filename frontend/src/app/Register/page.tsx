"use client"

import { Container, StyledLink } from './styles'

export default function Register() {

    return (
        <>

            <StyledLink href='/'>Voltar</StyledLink>

            <Container>
                <div className="register">

                    <h1>Faça o cadastro de uma pergunta</h1>

                    <form onSubmit={console.log('teste')}>
                        <label>Questão:</label>
                        <input type="text" placeholder="Digite sua questão" name='title' onChange={console.log('')} />

                        <label>Primeira resposta:</label>
                        <input type="text" placeholder="Digite a primeira resposta" name='first_answer' onChange={console.log('')} />

                        <label>Segunda resposta:</label>
                        <input type="text" placeholder="Digite a segunda resposta" name='second_answer' onChange={console.log('')} />

                        <label>Terceira resposta:</label>
                        <input type="text" placeholder="Digite a terceira resposta" name='third_answer' onChange={console.log('')} />

                        <label>Quarta resposta:</label>
                        <input type="text" placeholder="Digite a quarta resposta" name='forth_answer' onChange={console.log('')} />

                        <label>Qual é a resposta correta?</label>


                        <div className='radio'>

                            <div className='option'>
                                <input type="radio" name='correct_answer' value={1} onChange={console.log('')} />
                                <label htmlFor="option1">1</label>
                            </div>

                            <div className='option'>
                                <input type="radio" name='correct_answer' value={2} onChange={console.log('')} />
                                <label htmlFor="age1">2</label>
                            </div>

                            <div className='option'>
                                <input type="radio" name='correct_answer' value={3} onChange={console.log('')} />
                                <label htmlFor="age1">3</label>
                            </div >

                            <div className='option' >
                                <input type="radio" name='correct_answer' value={4} onChange={console.log('')} />
                                <label htmlFor="age1">4</label>
                            </div>
                        </div>

                        <button type="submit">Cadastrar </button>
                    </form>
                </div>

            </Container>

        </>
    )

}

