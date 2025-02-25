"use client"
import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
    font-size: 4em;
}

 .buttons {
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: #023535;
    padding-right: 4.5em;
    padding-left: 4.5em;
    font-size: 1.8em;
    margin-bottom: 2%;
    border: solid 2px black;
    border-radius: 10px;
    text-align: center;
    transition: .3s;
}

a:hover {
    background-color: #023535;
    color: #FACFCE;

}
`  

