import { CardTaskeStyle } from "./CardTaskeStyle";
import { Section, DivButton } from "./CardStyled";
import { Link } from "react-router-dom";
import { deleteTaskeService, modificarStatus } from "../../services/TaskeServices";
import { useState } from "react";
import { StyleButton } from "../button/ButtonStyled";
import { ApagarTaske } from "../../Modal/ApagarTaske";
import { useNavigate } from "react-router-dom";

export function CardTaske(props) {

    
    // Restante do código

    const [modalApagar, setModalApagar] = useState(false);
    const navigate = useNavigate();


    function clicarModal() {
        setModalApagar(!modalApagar);
    }

    function closeModal() {
        setModalApagar(false)
    }

    const LinkStyle = {
        color: 'white',
        textDecoration: 'none',
    }


    const [status, setStatus] = useState(props.status);

    const handleUpdateStatus = async () => {
        try {
            const response = await modificarStatus(props.id);
            if (response.status === 200) {
                setStatus(!status);
                props.forcePageReload();
                const msg = {
                    mensagem: "Status atualizado com sucesso!",
                    cor: 'green',
                    statusMsg: true
                }
                window.location.reload();
                navigate('/dastboard', { state: { msg } });


                

                // Atualize o estado da mensagem e da cor aqui
                //const novaMensagem = 'Status Alterado com sucesso!';
                //const novaCor = 'green';

                // Use o setState para atualizar a mensagem e a cor
                //location.state = { msg: { mensagem: novaMensagem, cor: novaCor, statusMsg: true } };

                // Se preferir, você pode atualizar diretamente o estado do componente, se aplicável.
                //setState({ mensagem: novaMensagem, cor: novaCor, statusMsg: true });
            }
        } catch (error) {
            console.error("Erro ao modificar o status da tarefa", error);
        }
    }



    return (
        <>
            
            <Section>
                <CardTaskeStyle>
                    Título<div> {props.name}</div>
                    Descrição<div className="descript">{props.description}</div>
                    Status<div > {status ? 'Concluida' : 'Pendente'}</div>
                    Data Criação<div> {props.date}</div>
                    <div className="button">
                        <StyleButton color="red" ><button className="red" onClick={clicarModal}>Apagar Tarefa</button></StyleButton>

                        <StyleButton ><button className="link green">
                            <Link to={`/editartask/${props.id}`} style={LinkStyle}>
                                Editar Tarefa
                            </Link>
                        </button></StyleButton>

                        <StyleButton><button className="green" onClick={handleUpdateStatus}>Alterar Status</button></StyleButton>
                    </div>
                </CardTaskeStyle>
            </Section>
            <ApagarTaske isOpen={modalApagar} closeModal={closeModal} id={props.id} reloadPage={props.forcePageReload}/>
        </>
    )
}
