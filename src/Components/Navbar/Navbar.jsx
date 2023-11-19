import { Nav, SettingsMenu, SettingsItem } from "./NavbarStyle";
import logo from "../../../public/logo.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Segnin } from "../../Modal/Signin";

export function Navbar() {
    const navigate = useNavigate();
    const [modalApagar, setModalApagar] = useState(false);

    function modalSignin() {
        setModalApagar(!modalApagar);
    }

    // Função para fechar o modal
    function closeModal() {
        setModalApagar(false);
    }

    return (
        <>
            <Nav>
            <img src={logo} alt="Logo do site" />
                {Cookies.get("token") ? (
                    <SettingsMenu>
                        <SettingsItem>
                            <Link to="/home">Página principal</Link>
                        </SettingsItem>
                        <SettingsItem>
                            <Link to="/dastboard">Tarefas</Link>
                        </SettingsItem>
                        <SettingsItem>
                            <Link to="/pontuacao">Pontuação</Link>
                        </SettingsItem>
                        <SettingsItem>
                            <Link to="/editarperfil">Editar Perfil</Link>
                        </SettingsItem>
                        <SettingsItem>
                            <a onClick={modalSignin}>Sair</a>
                        </SettingsItem>
                    </SettingsMenu>
                ) : (
                    null
                )}
            </Nav>
            <Segnin isOpen={modalApagar} closeModal={closeModal} />
            <Outlet />
        </>
    );
}
