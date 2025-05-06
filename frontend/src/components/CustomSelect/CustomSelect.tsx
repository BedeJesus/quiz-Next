"use client"
import { useState } from 'react';
import { CustomSelect, OptionList, Option, Container, StyledLink } from './styles';

interface SelectProps {
    quizzes: string[];
    selectedQuiz: string;
    onSelect: (value: string) => void;
}

export default function Select({ quizzes, selectedQuiz, onSelect }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);


    function handleSelectChange(value: string) {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <Container>
            <CustomSelect onClick={() => setIsOpen(!isOpen)}>
                {selectedQuiz || "Selecione um Quiz"}
            </CustomSelect>
            <OptionList open={isOpen}>
                {quizzes ? quizzes.map((name, index) => (
                    <StyledLink key={index} href={`/quiz/${encodeURIComponent(name)}`} passHref>
                        <Option key={index} onClick={() => handleSelectChange(name)}>
                            {name}
                        </Option>
                    </StyledLink>
                )) : <></>}
            </OptionList>
        </Container>
    );
};
