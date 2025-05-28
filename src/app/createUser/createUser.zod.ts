import { zodResolver } from "@mantine/form";
import { z } from "zod";
import { UserType } from "../interfaces/UserType";
import { AcolytePosition } from "../interfaces/AcolytePostion";

export const usersRegistrationSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório."),
    age: z.string().nonempty("Campo obrigatório."),
    email: z.string().email().nonempty(),
    userType: z.nativeEnum(UserType),
    password: z.string().min(6, "A senha deve conter pelo menos 6 dígitos"),
    password_confirmation: z.string(),
    acolytePosition: z
      .array(z.nativeEnum(AcolytePosition))
      .default([])
      .optional()
      .nullable(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "As senhas não conferem",
  })
  .refine(
    (data) => {
      console.log("userType:", data.userType);
      if (
        data.userType === UserType.ACOLYTE ||
        data.userType === UserType.ADMIN_ACOLYTE
      ) {
        return data.acolytePosition && data.acolytePosition.length > 0;
      }
      return true;
    },
    {
      path: ["acolytePosition"],
      message: "Selecione pelo menos uma posição para o acólito",
    }
  );

export type CreateUserData = z.infer<typeof usersRegistrationSchema>;

export const createUserResolver = zodResolver(usersRegistrationSchema);
