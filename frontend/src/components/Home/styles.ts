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

`  
export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #023535;
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
    width:15em;

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