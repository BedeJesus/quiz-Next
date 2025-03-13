"use client"
import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

.radio {
    display: flex;
    justify-content: space-around;
}

.result a:hover{
    background-color: #023535;
    color:#FACFCE ;

}


.result h2{
    background-color: transparent;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2%;
    border: solid 2px #023535;
    border-radius: 10px;
    width: 35em;
    height: 30em;
    justify-content: space-between;
    
    ::placeholder {
        color: #023535;
        opacity: 1;
    }

    *:focus {
        outline: none;
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

export const Question = styled.h1`
text-align: center;
    
`

export const Answers = styled.label`
font-size: 1.5em;
text-align: ${(props) => (props.which == 'qual' ? 'center' : null)}; 

&.hover{
    cursor: pointer;
}
    
`

export const Title = styled.label`
font-size: 2em;
text-align: center;
    
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ButtonsRadio = styled.button`
    
    border: 2px solid black;
    border-radius: 10px;
    font-size: 1.3em;
    width: 1.3em;
    transition: ease-out 0.3s;
    background-color: ${(props) => (props.selected ? 'black' : 'transparent')};  
    color: ${(props) => (props.selected ? 'white' : 'black')}; 
    margin-right: 0.2em;

    &:hover{
        
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
        cursor: pointer;
    }

    &:active{
        transform: scale(0.9);
    }

    
`