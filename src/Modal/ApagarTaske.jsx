import { useState } from "react";
import { Modaldiv } from "./ApagarTaskeStyle";
import { deleteTaskeService } from "../services/TaskeServices";
import { useNavigate } from "react-router-dom";

export function ApagarTaske({ isOpen, closeModal, id, reloadPage }) {

    const navigate = useNavigate();
    const [deleted, setDeleted] = useState(false);

    function cancelar() {
        closeModal();
    }

    async function deleteTaske() {
        try {
            const response = await deleteTaskeService(id);
            if (response.status === 200) {
                setDeleted(true);
                const msg = {
                    mensagem: "Tarefa apagada com sucesso!",
                    cor: 'red',
                    statusMsg: true
                }
                navigate('/dastboard', { state: { msg } });
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao excluir a tarefa", error);
        }
    }

    if (deleted) {
        return null;
    }

    if (isOpen) {
        return (
            <>
                <Modaldiv>
                    <div className="conteiner">
                        <div>
                            <p>Tem certeza que deseja apagar a tarefa?</p>
                        </div>
                        <div className="button">
                            <button className="red" onClick={cancelar}>Não</button>
                            <button className="green" onClick={deleteTaske}>sim</button>
                        </div>
                    </div>
                </Modaldiv>
            </>
        )
    }
}