"use client"
import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

export const InputRadio = styled.input`
    margin: 2em 0.7em 0 0;
    width: 1.1em;
    height: 1.1em;
    cursor: pointer;
    accent-color: #023535;
    transform: scale(1.3);
`

export const StyledLink = styled(Link)`
    display: flex;
    font-size: 1.5em;
    width: fit-content;
    border-radius: 10px;
    margin: 1em;
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

    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
    }

    &:active{
        transform: scale(0.9);
    }
`