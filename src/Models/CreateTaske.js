import { z } from "zod";

export const createTaske = z.object({
    name: z.string().nonempty({ message: "Titulo não pode ser vazio" }),
    description: z.string().nonempty({ message: "Descrição não pode ser vazia" })
})