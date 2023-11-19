import React, { useEffect, useState } from "react";
import { findAllTaskeService } from "../../services/TaskeServices";
import { CardTaske } from "../../Components/Card/CardTaske";
import { Link } from "react-router-dom";
import { DastboardStyle, Cards, StyledDiv } from "../../Components/Card/DastboardStyle";
import { MensagensTemporarias } from "../../Mensagens/MensagensTemporarias";
import { useLocation } from "react-router-dom";

export function Dastboard() {
    const [taske, setTaske] = useState([]);
    const [forceReload, setForceReload] = useState(false);

    const location = useLocation();
    const { state } = location;
    const { mensagem, cor, statusMsg } = (state && state.msg) ? state.msg : {};

    useEffect(() => {
        if (statusMsg) {
            // Mostrou a mensagem, agora limpe o `location`
            window.history.replaceState({}, document.title, location.pathname);
        }
    }, [statusMsg]);

    async function findAllTaskes() {
        try {
            const taskeResponse = await findAllTaskeService();
            setTaske(taskeResponse);
        } catch (error) {
            console.error("Erro ao buscar as tarefas: ", error);
        }
    }

    useEffect(() => {
        findAllTaskes();
    }, [forceReload]);

    // Função para forçar a recarga da página
    function forcePageReload() {
        setForceReload(true);
    }

    return (
        <>
            {statusMsg ? <MensagensTemporarias msg={mensagem} cor={cor} /> : null}
            <DastboardStyle>
                <h1><Link to="/createtaske">Criar Nova Tarefa +</Link></h1>
            </DastboardStyle>
            <Cards>
                {Array.isArray(taske) && taske.length > 0 ? (
                    taske.map(item => (
                        <CardTaske
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            date={item.createAt}
                            status={item.status}
                            forcePageReload={forcePageReload}
                        />
                    ))
                ) : (
                    <StyledDiv>
                        <p>Não tem tarefas no momento</p>
                        <img src="./public/x.png" alt="" />
                    </StyledDiv>
                )}
            </Cards>
        </>
    )
}
