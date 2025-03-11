"use client"
import { useState } from 'react';
import { CustomSelect, OptionList, Option, Container, SelectArrow } from './styles';

export default function Select({ groups, selectedGroup, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleSelectChange(value){
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <Container>
            <CustomSelect onClick={() => setIsOpen(!isOpen)}>
                {selectedGroup || "Selecione um Quiz"}
            </CustomSelect>
            <OptionList isOpen={isOpen}>
                {groups.map((group, index) => (
                    <Option key={index} onClick={() => handleSelectChange(group)}>
                        {group}
                    </Option>
                ))}
            </OptionList>
        </Container>
    );
};
