"use client"
import { Container, StyledLink, BackToMenu } from './styles'
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Select from '@/components/CustomSelect/CustomSelect';


export default function SelectQuiz() {

    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        getQuizOptions();
    }, []);

    async function getQuizOptions(): Promise<void> {
        const data = await api.get('questions/getQuizOptions')
            .then((response) => {
                setQuizzes(response.data.quizzes)

            })
            .catch((err) => {
                alert('erro ao buscar os quizzes')
                console.log(err)
            })

    }

    function handleSelectChange(value: string): void {
        setSelectedQuiz(value);
        setIsOpen(false);
    }


    return (
        <Container>

            <BackToMenu href='/'>Voltar</BackToMenu>

            <>
                <h1>Selecione o modo de jogo</h1>

                <div className="buttons">
                    <StyledLink href={`/quiz/${encodeURIComponent('random')}`} passHref>Perguntas Aleatórias</StyledLink>
                    <Select quizzes={quizzes} selectedQuiz={selectedQuiz} onSelect={handleSelectChange} />
                </div>
            </>

        </Container>
    )


}