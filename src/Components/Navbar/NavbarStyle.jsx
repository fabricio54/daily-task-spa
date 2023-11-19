import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: #D3B4FD;
    padding: 0.5rem;

    img {
        max-width: 6rem;
        border-radius: 50%;
        margin-left: 1rem;
    }
`;

export const SettingsMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const SettingsItem = styled.li`
    margin: 0 2rem;

    a {
        text-decoration: none;
        color: #333;
        font-weight: bold;
        transition: color 0.5s;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`;
