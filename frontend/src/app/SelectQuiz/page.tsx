"use client"
import { Container, StyledLink, BackToMenu } from './styles'
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Select from '@/components/CustomSelect/CustomSelect';

interface Group {
    id: string;
    name: string;
}

export default function SelectQuiz() {

    const [groups, setGroups] = useState<Group[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        getQuizOptions();
    }, []);

    async function getQuizOptions(): Promise<void> {
        const data = await api.get<{groups: Group[]}>('questions/getQuizOptions')
            .then((response) => {
                setGroups(response.data.groups)

            })
            .catch((err) => {
                alert('erro ao buscar os quizzes')
                console.log(err)
            })

    }

    function handleSelectChange(value: string): void {
        console.log("Valor selecionado:", value);
        setSelectedGroup(value);
        setIsOpen(false);
    }


    return (
        <Container>

            <BackToMenu href='/'>Voltar</BackToMenu>

            <>
                <h1>Selecione o modo de jogo</h1>

                <div className="buttons">
                    <StyledLink href={`/Quiz/${encodeURIComponent('random')}`} passHref>Perguntas Aleatórias</StyledLink>
                    <Select groups={groups} selectedGroup={selectedGroup} onSelect={handleSelectChange} />
                </div>
            </>

        </Container>
    )


}