import { z } from "zod";

export const codigoSchema = z.object({
    codigo: z.number().nonempty({ message: "Campo vazio" })
})