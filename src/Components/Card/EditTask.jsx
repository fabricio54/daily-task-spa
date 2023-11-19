import { Section, Form, DivButton } from "./CardStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTaske } from "../../Models/CreateTaske";
import { ErroSpan } from "./CardStyled";
import { useParams } from "react-router";
import { updateTaskeService } from "../../services/TaskeServices";
import { useNavigate } from "react-router";

export function EditTask() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(createTaske)
    })

    async function onEditarTaske(data) {
        const response = await updateTaskeService(data, id);
        console.log(response.status);
        if(response.status === 200) {
            const msg = {
                mensagem: "Tarefa atualizada com sucesso!",
                cor: 'green',
                statusMsg: true
            }
            navigate('/dastboard', { state: { msg } });
        }else {
            console.log('erro no servidor')
            reset();
        }
    }

    return (
        <>
        <Section>
            <Form onSubmit={handleSubmit(onEditarTaske)}>
                <label>
                    Título: 
                    <input type="text" placeholder="Editar Título" {...register('name')}/>
                    {errors.name && <ErroSpan>*{errors.name.message}</ErroSpan>}
                </label>
                <label>
                    Descrição:
                    <textarea {...register('description')} cols="53" rows="10"></textarea>
                    {errors.title && <ErroSpan>*{errors.title.message}</ErroSpan>}
                </label>
                <DivButton><button>Concluir Edição</button></DivButton>
            </Form>
        </Section>
        </>
    )
}