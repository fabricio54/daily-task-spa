import { Modaldiv } from "./ApagarTaskeStyle";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Segnin({ isOpen, closeModal }) {
  const navigate = useNavigate();

  const cancelar = () => {
    closeModal(); // Chame a função para fechar a modal
  }

  const handleLogout = () => {
    // Lógica para fazer logout (por exemplo, remover o token de autenticação)
    Cookies.remove("token");
    closeModal(); // Chame a função para fechar a modal
    navigate("/"); // Redirecione para a página de login após o logout
  }

  if (isOpen) {
    return (
      <>
        <Modaldiv>
          <div className="conteiner">
            <div>
              <p>Tem certeza que deseja sair da aplicação?</p>
            </div>
            <div className="button">
              <button className="red" onClick={cancelar}>Não</button>
              <button className="green" onClick={handleLogout}>Sim</button>
            </div>
          </div>
        </Modaldiv>
      </>
    );
  } else {
    return null; // Renderize null se a modal não estiver aberta
  }
}

    