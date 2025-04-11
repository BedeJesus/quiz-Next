"use client"
import api from '@/utils/api'
import { useState, useEffect } from 'react'
import { Container, StyledLink, Button, Form, Input, ButtonsRadio, GroupName, Buttons } from './styles'
import { Question } from '../../interfaces/interfaces'
import { ToastContainer, toast, Bounce } from 'react-toastify';

export default function Register() {

    const [question, setQuestion] = useState<Question>({
        title: '',
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
        fourthAnswer: '',
        correctAnswer: 0
    });

    const [group, setGroup] = useState<string>('')
    const [questions, setQuestions] = useState<Question[]>([])
    const [questionCounter, setQuestionCounter] = useState<number>(1)

    useEffect(() => {
        setQuestion(questions[questionCounter - 1] || {});
    }, [questionCounter]);


    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }

    function handleRegisterQuestion(e?: React.FormEvent) {
        if (e) e.preventDefault();
    
        const newQuestions = [...questions];
        newQuestions[questionCounter - 1] = question;
    
        setQuestions(newQuestions);
        setQuestionCounter(questionCounter + 1);
    }
    

    async function registerQuestions(questions: Question[], e: React.FormEvent) {
        e.preventDefault();
        const questionsWithGroup = questions.map(question => ({
            ...question,
            group: group,
        }));

        toast.promise(
            api.post('questions/create', questionsWithGroup),
            {
                pending: 'Criando Quiz...',
                success: 'Quiz criado com sucesso!',
                error: {
                    render({ data }: any) {
                        if (data.response?.data?.message) {
                            return data.response.data.message
                        }
                        return 'Erro ao criar o quiz!'
                    },
                }
            },
            {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }

        );
    }

    function handleAnswerClick(value: number): void {
        setQuestion(prevState => ({ ...prevState, correctAnswer: value }));
    }

    return (
        <Container>

            <StyledLink href='/'>Voltar</StyledLink>

            <ToastContainer />


            <div className="register">

                <GroupName type="text" placeholder="Digite o título do Quiz" name='group' value={group} onChange={(e) => setGroup(e.target.value)} />

                <Form onSubmit={(e) => registerQuestions(questions, e)}>
                    <label>Questão {questionCounter}:</label>
                    <Input type="text" placeholder="Digite sua questão" name='title' value={question.title || ""} onChange={handleOnChange} />

                    {/* <label>Primeira resposta:</label> */}
                    <Input type="text" placeholder="Digite a primeira resposta" name='firstAnswer' value={question.firstAnswer || ""} onChange={handleOnChange} />

                    {/* <label>Segunda resposta:</label> */}
                    <Input type="text" placeholder="Digite a segunda resposta" name='secondAnswer' value={question.secondAnswer || ""} onChange={handleOnChange} />

                    {/* <label>Terceira resposta:</label> */}
                    <Input type="text" placeholder="Digite a terceira resposta" name='thirdAnswer' value={question.thirdAnswer || ""} onChange={handleOnChange} />

                    {/* <label>Quarta resposta:</label> */}
                    <Input type="text" placeholder="Digite a quarta resposta" name='fourthAnswer' value={question.fourthAnswer || ""} onChange={handleOnChange} />

                    <label>Qual é a resposta correta?</label>

                    <div className='radio'>
                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(1)} selected={question.correctAnswer === 1}>1</ButtonsRadio>
                        </div>

                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(2)} selected={question.correctAnswer === 2}>2</ButtonsRadio>
                        </div>

                        <div className='option'>
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(3)} selected={question.correctAnswer === 3}>3</ButtonsRadio>
                        </div >

                        <div className='option' >
                            <ButtonsRadio type="button" onClick={() => handleAnswerClick(4)} selected={question.correctAnswer === 4}>4</ButtonsRadio>
                        </div>
                    </div>

                    <Buttons>
                        {questionCounter > 1 ?
                            <Button type="button" register={false} onClick={() => setQuestionCounter(questionCounter - 1)}>Pergunta Anterior</Button> : null
                        }

                        <Button type="button" register={false} onClick={handleRegisterQuestion}>Próxima Pergunta</Button>
                    </Buttons>

                    <Button type="submit" disabled={questions.length < 3 ? true : false} register={true}>{questions.length < 3 ? 'Crie pelo menos 3 perguntas' : `Cadastrar quiz`}</Button>

                </Form>
            </div>

        </Container>
    )

}