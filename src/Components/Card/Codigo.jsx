import { useLocation } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { confirmEmail, userCreate } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";
import { CodeStyled } from "./CodigoStyled";

export function Codigo() {
  const navigate = useNavigate();
  const [getCode, setCode] = useState('');

  const handleInputCode = async (event) => {
    const codigo = event.target.value;

    // Verificar se o valor inserido é um número
    if (!isNaN(codigo)) {
      setCode(codigo);
      const name = Cookies.get("name");
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const email = Cookies.get("email");
      const codigoServe = Cookies.get("codigoserver");

      if (codigoServe === codigo && codigo.length === 6) {
        const usuario = { name, username, email, password };
        const cadastro = await userCreate(usuario);
        navigate('/');
      }
    }
  }

  return (
    <>
      <CodeStyled>
        <h1>Codigo de verificação</h1>
        <input
          type="text"
          value={getCode}
          onChange={handleInputCode}
          placeholder="Digite o código"
          pattern="\d{6}" // Aceita apenas 6 dígitos numéricos
          maxLength={6}   // Limita o campo a 6 caracteres
        />
      </CodeStyled>
    </>
  );
}
