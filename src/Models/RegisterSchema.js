import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty({ message: "Nome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Nome não pode ter apenas espaços" }),
    username: z.string().nonempty({ message: "Sobrenome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Sobrenome não pode ter apenas espaços" }),
    email: z.string().nonempty({ message: "Email não pode ser vazio" }).refine((value) => /@/.test(value), { message: "Email deve conter um @" }),
    password: z.string().nonempty({ message: "Senha não pode ser vazia" }).refine((value) => /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,12}$/.test(value), { message: "* A senha deve conter pelo menos entre 8 a 12 caracters; * A senha deve conter pelo menos um caracter especial: '@,#/?'. " })
})