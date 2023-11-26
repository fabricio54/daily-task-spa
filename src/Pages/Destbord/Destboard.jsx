import React, { useEffect, useState } from "react";
import { findAllTaskeService, searchTitle, taskeFinish, taskePendent } from "../../services/TaskeServices";
import { CardTaske } from "../../Components/Card/CardTaske";
import { Link } from "react-router-dom";
import { DastboardStyle, Cards, StyledDiv } from "../../Components/Card/DastboardStyle";
import { MensagensTemporarias } from "../../Mensagens/MensagensTemporarias";
import { useLocation } from "react-router-dom";
import { ErroSpan } from "../../Components/Card/CardStyled";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "../../Models/searchSchema";
import { Options } from "./OptionsStyle";

export function Dastboard() {
    const [taske, setTaske] = useState([]);
    const [forceReload, setForceReload] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

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

    const { register, handleSubmit, reset, formState: {
        errors } } = useForm({
            resolver: zodResolver(searchSchema)
        })

    async function onSearch(data) {
        try {
            const { title } = data
            const response = await searchTitle(title)

            if (response.status === 200) {
                console.log(response.data.taskes)
                setTaske(response.data.taskes)
                reset();
            }
            if (response.status === 400) {
                setTaske(response.data.taske)
                reset();
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Função para manipular a mudança nos botões de rádio
    async function handleRadioChange(option) {
        setSelectedOption(option);

        if (option === 'Concluidas') {
            const response = await taskeFinish();
            console.log(response)
            if (response.status === 200) {
                setTaske(response.data.taskes)
            } if (response.status === 400 && response.data.taskes.length === 0) {
                setTaske(response.data.taskes)
            }
        } else if (option === 'Pendentes') {
            const response = await taskePendent();
            if (response.status === 200) {
                setTaske(response.data.taskes)
            } if (response.status === 400 && response.data.taskes.length === 0) {
                setTaske(response.data.taskes)
            }
        }
    }

    return (
        <>
            {statusMsg ? <MensagensTemporarias msg={mensagem} cor={cor} /> : null}
            <DastboardStyle>
                <h1><Link to="/createtaske">Criar Nova Tarefa +</Link></h1>
            </DastboardStyle>

            <Options>
                <form onSubmit={handleSubmit(onSearch)}>
                    <input type="text" placeholder="Pesquisar Tarefa" {...register("title")} />
                    <button type="submit">Buscar</button>
                </form>
                {errors.title && <ErroSpan>{errors.title.message}</ErroSpan>}

                <div>
                    <input
                        type="radio"
                        name="grupo"
                        value="Concluidas"
                        checked={selectedOption === 'Concluidas'}
                        onChange={() => handleRadioChange('Concluidas')}
                    /> Concluídas
                </div>

                <div>
                <input
                    type="radio"
                    name="grupo"
                    value="Pendentes"
                    checked={selectedOption === 'Pendentes'}
                    onChange={() => handleRadioChange('Pendentes')}
                /> Pendentes
                </div>

            </Options>

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
    );
}
