import styled from "styled-components"
export const CardTaskeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    padding: 20px;
    max-width: 250px;
    background-color: #D3B4FD;
    border-radius: 5px;
    margin-bottom: 2rem;
    gap: 0.5rem;
    font-weight: 500;

    span {
        font-weight: bold;
    }

    div {
        background-color: white;
        padding: .8rem 1rem;
        color: black;
        border-radius: .2rem;
        width: 90%;
        font-size: .7rem;
    }

    div.descript {
        height: 70px;
    }

    div.button {
        display: flex;
        gap: 2%;
        background-color: #D3B4FD;
    }

    button {
        width: 100%;
        font-size: .5rem;
    }

    button.link {
        text-decoration: none;
        color: white;
    }

    .red:hover {
        background-color: #ff0000a6;
        padding: .4rem 1.4rem;
    }

    .green:hover {
        background-color: #008000a1;
        padding: .4rem 1.4rem;
    }

`;