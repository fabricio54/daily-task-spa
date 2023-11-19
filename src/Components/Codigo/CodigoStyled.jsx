import styled from "styled-components";

export const CodeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15rem auto;
    height: 8vh;
    width: 35vw;
    background-color: white;
    border-radius: .3rem;
`;

export const InputCode = styled.input`
    width: 30vw;
    height: 2rem;
    margin: .5rem 0;
    font-size: 1rem;
    padding: 0 0 0 .5rem;
    border-color: #6156A6;
    border-radius: .2rem;


    &:focus {
        background-color: #75727211;
        color: black;
    }

`;