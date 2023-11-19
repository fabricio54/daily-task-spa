import { Section, Form, DivButton, SectionLink, ErroSpan } from "./CardStyled";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { userCreate, confirmEmail } from "../../services/UserServices";
import { useState, useEffect } from "react";
import { registerSchema } from "../../Models/RegisterSchema";
import Cookies from "js-cookie";
import { authentication } from "../../services/authServices";
import { loginSchema } from "../../Models/LoginSchema";
import { Link } from "react-router-dom";


export function Card() {

    const [userData, setData] = useState({});
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    async function onRegister(data) {
        const { name, username, email, password } = data;
        const codigo = await confirmEmail({ name ,email });
        console.log(codigo.data.codigo)
        Cookies.set("name", name, { expires: 1 });
        Cookies.set("username", username, { expires: 1 });
        Cookies.set("email", email, { expires: 1 });
        Cookies.set("password", password, {
            expires: 1
        })
        Cookies.set("codigoserver", codigo.data.codigo, {
            expires: 1
        })
        //console.log(response);
        //const response = userCreate({ name, username, email, password });
        navigate("/codigo");
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit(onRegister)}>
                <label>
                    Nome: <br />
                    <input type="text" {...register("name")} placeholder="Insira o nome" />
                    {errors.name && <ErroSpan>*{errors.name.message}</ErroSpan>}
                </label>
                <label >
                    Sobrenome:
                    <br />
                    <input type="text" {...register("username")} placeholder="Insira o sobrenome" />
                    {errors.username && <ErroSpan>*{errors.username.message}</ErroSpan>}
                </label>
                <label >
                    E-mail:
                    <br />
                    <input type="text" {...register("email")} placeholder="Insira o Email" />
                    {errors.email && <ErroSpan>*{errors.email.message}</ErroSpan>}
                </label>
                <label >
                    Senha:
                    <br />
                    <input type="password" {...register("password")} placeholder="Insira uma senha" />
                    {errors.password && <ErroSpan>*{errors.password.message}</ErroSpan>}
                </label>
                <DivButton>
                    <button>Finalizar Cadastro</button>
                </DivButton>
            </Form>
        </Section>
    )
}

export function CardLogin() {

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    async function inSignin(data) {
        try {
            const token = await authentication(data);

            if(token.status === 200) {
                console.log(token)
                Cookies.set('token', token.data.token, { 
                    expires: 1
                });
                navigate("/home");
            }

        } catch (error) {
            console.log(error);
            navigate('/');
        }
        
    }
    

    return (
        <Section >
            <Form onSubmit={handleSubmit(inSignin)}>
                <label>
                    Email:
                    <br />
                    <input type="text" {...register("email")} placeholder="Insira o Email" />
                    {errors.email && <ErroSpan>*{errors.email.message}</ErroSpan>}
                </label>
                <label>
                Senha:
                    <br />
                    <input type="password" {...register("password")} placeholder="Insira uma senha" />
                    {errors.password && <ErroSpan>*{errors.password.message}</ErroSpan>}
                </label>
                <DivButton>
                    <button>
                        Login
                    </button>
                </DivButton>
                <SectionLink>
                    <div>
                        <Link to="/cadastrar">
                        Ainda não é cadastrado? Clique Aqui</Link>
                    </div>
                </SectionLink>
            </Form>
        </Section>
    )
}