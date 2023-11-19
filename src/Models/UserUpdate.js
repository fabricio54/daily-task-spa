import { z } from "zod";

export const userupdateschema = z.object({
    name: z.string().nonempty({ message: "Nome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Nome não pode ter apenas espaços" }),
    username: z.string().nonempty({ message: "Sobrenome não pode ser vazio" }).refine(value => !/^\s*$/.test(value), { message: "Sobrenome não pode ter apenas espaços" }),
    
})