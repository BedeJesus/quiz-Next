"use client"
import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -2em; // MUDAR DEPOIS

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

    label {
        font-size: 1.5em;
        margin-bottom: 0.3em;
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

    
`

export const ButtonsRadio = styled.button`
    
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
    display: flex;
    font-size: 1.5em;
    width: fit-content;
    border-radius: 10px;
    margin: 1em 1em 0 1em;
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
export const Button = styled.button`
    margin-top: 5%;
    font-size: 1.5em;
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

    width: 50%;

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