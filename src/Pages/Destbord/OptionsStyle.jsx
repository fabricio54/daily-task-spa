import styled from "styled-components";

export const Options = styled.div`
    display: flex;
    background-color: white;
    gap: 2rem;
    justify-content: center;
    padding: 1rem;
    width: 85%;
    margin: 0 auto; /* Adiciona margem automática à esquerda e à direita para centralizar */
    border-radius: .4rem;


    form {
        margin-top: -0.2rem;
        input {
            height: 1.4rem;
            padding-left: 1rem;
        }

        button {
            height: 1.6rem;
            padding-left: .4rem;
            padding-right: .4rem;
            background-color: #34d3d3bc;
            cursor: pointer;

            &:hover {
            background-color: #34bfbf;
            transition: .3s;
        }
        }
    }
`;
