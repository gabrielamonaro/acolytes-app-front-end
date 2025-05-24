import { zodResolver } from "@mantine/form";
import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres."),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export const loginFormResolver = zodResolver(signInSchema);
