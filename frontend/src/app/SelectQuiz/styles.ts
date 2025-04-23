"use client"
import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

h1 {
    font-size: 4em;
    text-align: center;

    @media (max-width: 600px) {
        margin-bottom: 0.2em ;
    }
    
}

a:hover {
    background-color: #023535;
    color: #FACFCE;

}
`
export const BackToMenu = styled(Link)`
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

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    font-size: 1.8em;
    margin-bottom: 2%;
    border: solid 2px black;
    border-radius: 10px;
    text-align: center;
    color: black;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 black;
    width: 15em;

    @media (max-width: 600px) {
        width:10em;
    }
    
    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
    }

    &:active{
        transform: scale(0.9);
    }
`

export const Select = styled.select`
    display: flex;

    text-decoration: none;
    color: black;
    font-size: 1.8em;
    margin-bottom: 2%;
    border: solid 2px black;
    border-radius: 10px;
    text-align: center;
    color: black;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 black;
    appearance: none;
    width: 100%;

    &:hover{
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
        cursor: pointer;
    }

    &:active{
        transform: scale(0.9);
    }
`


export const Option = styled.option`
    color: black;
    display: flex;
    background-color: transparent;
    border: solid 2px black;
    border-radius: 10px;


    &:hover{
        
        cursor: pointer;
    }


    
`