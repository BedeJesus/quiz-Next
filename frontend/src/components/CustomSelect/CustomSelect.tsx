"use client"
import { useState } from 'react';
import { CustomSelect, OptionList, Option, Container, StyledLink } from './styles';

interface SelectProps {
    groups: string[];               
    selectedGroup: string;          
    onSelect: (value: string) => void;  
}

export default function Select( { groups , selectedGroup, onSelect }: SelectProps ) {
    const [isOpen, setIsOpen] = useState(false);

    function handleSelectChange(value:string) {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <Container>
            <CustomSelect onClick={() => setIsOpen(!isOpen)}>
                {selectedGroup || "Selecione um Quiz"}
            </CustomSelect>
            <OptionList open={isOpen}>
                {groups.map((group, index) => (
                    <StyledLink key={index} href={`/Quiz/${encodeURIComponent(group)}`} passHref>
                        <Option key={index} onClick={() => handleSelectChange(group)}>
                            {group}
                        </Option>
                    </StyledLink>
                ))}
            </OptionList>
        </Container>
    );
};
