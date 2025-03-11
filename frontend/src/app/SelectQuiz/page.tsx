"use client"
import { Container, StyledLink, Option } from './styles'
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Select from '@/components/CustomSelect/CustomSelect';

export default function SelectQuiz() {

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getQuizOptions();
    }, []);

    async function getQuizOptions() {
        const data = await api.get('questions/getQuizOptions')
            .then((response) => {
                setGroups(response.data.groups)

            })
            .catch((err) => {
                alert('erro ao buscar os quizzes')
                console.log(err)
            })

    }

    function handleSelectChange(value) {
        console.log("Valor selecionado:", value);
        setSelectedGroup(value);
        setIsOpen(false);  // Fechar a lista após seleção
    }



    return (
        <Container>

            <h1>Selecione o modo de jogo</h1>

            <div className="buttons">
                <StyledLink href='/SelectQuiz'>Perguntas Aleatórias</StyledLink>
                <Select groups={groups} selectedGroup={selectedGroup} onSelect={handleSelectChange} />
            </div>

        </Container>
    )


}