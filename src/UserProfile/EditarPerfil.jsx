import { userupdateschema } from "../Models/UserUpdate";
import { Section, Form, DivButton } from "../Components/Card/CardStyled";
import { ErroSpan } from "../Components/Card/CardStyled";
import { updateProfile } from "../services/TaskeServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function EditUserProfile() {

    const [userData, setData] = useState({});
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(userupdateschema)
    })

    async function onProfileUpdate(dados) {
        console.log(dados)
        setData(dados)
        console.log(userData)
        const response = await updateProfile(userData)
        if(response.status === 200) {
            console.log('user update succefully ')
            const msg = {
                mensagem: "Atualizações no perfil feitas com sucesso!",
                cor: 'green',
                statusMsg: true
            }
            reset();
            navigate("/dastboard", { state: { msg } });

        }else {
            console.log(response)
            reset();
        }
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit(onProfileUpdate)}>
                <label>
                    Nome: <br />
                    <input type="text" {...register("name")} placeholder="Atualize o nome" />
                    {errors.name && <ErroSpan>*{errors.name.message}</ErroSpan>}
                </label>
                <label >
                    Sobrenome:
                    <br />
                    <input type="text" {...register("username")} placeholder="Atualize o sobrenome" />
                    {errors.username && <ErroSpan>*{errors.username.message}</ErroSpan>}
                </label>
                <DivButton>
                    <button>Finalizar</button>
                </DivButton>
            </Form>
        </Section>
    )
}