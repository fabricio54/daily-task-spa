import styled from "styled-components";

export const MsgTemporarias = styled.p`
    background-color: ${props => props.cor === "green" ? "green" : "red"};
    width: 100%;
    height: 30px;
    padding: .5rem;
    border-radius: .2rem;
    text-align: center;
`;

