import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #D3B4FD;
    width: 55vw;
    margin-top: 5rem;
    padding: 2rem;
    border-radius: .3rem;

    label {
        font-size: 1.5rem;

        textarea {
            width: 100%;
            margin-top: 4px;
            padding: 0 0 0 .5rem;
            border-radius: .2rem;

            &focus {
                background-color: white;
                color: black;
            }
        }

        input {
            width: 100%;
            height: 2rem;
            margin: .5rem 0;
            font-size: 1rem;
            padding: 0 0 0 .5rem;
            border-color: #6156A6;
            border-radius: .2rem;
            background-color: white;

        &:focus {
            background-color: white;
            color: black;
            }
        }
    }
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: .8rem 0 0 0;
        padding: .4rem;
        font-size: 1rem;
        background-color: #34d3d3bc;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
            background-color: #34bfbf;
            transition: .3s;
            padding: .6rem;
        }
    }
`;

export const SectionLink = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
    gap: .5rem;

    div {
        a {
            color: black;
            text-decoration: none;
        
            &:hover {
                font-size: 1.1rem;
                transition: .4s;
            }
        }   
    }
`;

export const ErroSpan = styled.span`
    background-color: white;
    color: #ef3a3a;
    padding: .5rem;
    width: 99%;
    display: flex;
    justify-content: left;
    font-size: .7rem;
    font-weight: bold;
    border-radius: 0.2rem;
`;