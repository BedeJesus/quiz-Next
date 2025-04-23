"use client"
import styled from "styled-components";
import Link from 'next/link'

interface ButtonProps {
    register?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .register{
        @media (max-width: 600px) {  
            margin-top: 11em;
        }
    }

    .register h1 {
        font-size: 2.3em;
        margin-bottom: 0.2em;
    }
    
    .register .radio {
        display: flex;
        justify-content: space-around;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2%;
    border: solid 2px #023535;
    border-radius: 10px;

    @media (max-width: 600px) {  
        margin: 0 10px 0 10px;
    }

    label {
        font-size: 1.5em;
        margin-bottom: 0.3em;
        text-align: center;
    }
    
    ::placeholder {
        color: #023535;
        opacity: 1;
    }

    *:focus {
        outline: none;
    }
`

export const Input = styled.input`
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 2px #023535;
    margin-bottom: 1.2em; 
    font-size: 1.2em;

    @media (max-width: 600px) {  
        font-size: 1.5em;
    }
`

export const GroupName = styled.input`
    font-size: 2.3em;
    display: flex;
    justify-self:center;
    margin-bottom: 0.2em;
    background-color: transparent;
    border: none;
    border-bottom: solid 2px #023535;
    text-align: center;
    outline: none;
    width: 99%;

    @media (max-width: 600px) {  
        width: 93%
    }
    
`

export const ButtonsRadio = styled.button<{ selected: boolean }>`
    border: 2px solid black;
    border-radius: 10px;
    font-size: 1.8em;
    width: 1.3em;
    transition: ease-out 0.3s;
    background-color: ${(props) => (props.selected ? 'black' : 'transparent')};  
    color: ${(props) => (props.selected ? 'white' : 'black')}; 

    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
        cursor: pointer;
    }

    &:active{
        transform: scale(0.9);
    }

    
`

export const StyledLink = styled(Link)`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 1.5em;
    width: fit-content;
    border-radius: 10px;
    padding: 0.5em 1em;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 black;
    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
    }

    &:active{
        transform: scale(0.9);
    }
`
export const Button = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'register'
}) <ButtonProps>`
    margin-top: 5%;
    font-size: 1.3em;
    transition: .3s;
    background-color: #FACFCE;
    height: 1.5em;
    border-radius: 10px;
    color: black;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 black;
    cursor: pointer;
    width:${(props) => (props.register ? "100%" : "50%")};  

    @media (max-width: 600px) {  
        height: 2.5em;
    }

    :disabled{
        background-color: red;
        color: black;
        border: 2px solid black;
        cursor: not-allowed;
    }

    :disabled:hover{
        background-color: red;
        color: black;
        border: 2px solid black;
        cursor: not-allowed;
    }


    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
    }

    &:active{
        transform: scale(0.9);
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`