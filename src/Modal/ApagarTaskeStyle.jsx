import styled from 'styled-components';

export const Modaldiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7); /* Fundo semi-transparente para escurecer o conteúdo abaixo */
  z-index: 999; /* Valor alto para garantir que o modal esteja no topo de todos os elementos */
  display: flex;
  justify-content: center;
  align-items: center;

  .conteiner {
    background-color: #D3B4FD;
    padding: 2rem;
    border-radius: .3rem;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: .7rem;

    button {
        padding: .5rem;
        cursor: pointer;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    button:hover {
        transform: .2s;
        padding: .6rem;
    }
  }
`;


// Restante do seu código...

