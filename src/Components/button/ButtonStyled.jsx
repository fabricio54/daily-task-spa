import styled from "styled-components";

export const StyleButton = styled.span`
    margin-right: 1rem;
    button {
        background-color: ${props => props.color || 'green'};
        color: white;
        padding: 4px 20px;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
    }

    button:hover {
        background-color: ${props => props.color || 'green'};
    }
`;