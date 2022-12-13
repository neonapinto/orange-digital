import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%); 
`

export const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid grey;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px grey;
    gap: 1rem;
    max-width: 300px;
    width: 100%;
    height: 300px;
    filter: backdrop-blur(10px);
    background-color: white;
    opacity: 0.8;

    input{
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid grey;
        width: 90%;
    }

    button{
        padding: 0.5rem 1rem;
        width: 90%;
        background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%); 
        border: none;
        color: black;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover{
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
        transform: scale(1.01)
    }
    button:active{
        transform: scale(0.98);
    }
`

export const CardContainer = styled.div `
    width: 90%;

    p{
        display: flex;
        justify-content: space-between;

        span:first-child {
            font-style: italic;
        }
    }

`

         


 