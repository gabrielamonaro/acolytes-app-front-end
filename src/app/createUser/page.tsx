"use client";

import styles from "./page.module.css";
import {
  Button,
  MultiSelect,
  NativeSelect,
  // NumberInput,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { CreateUserData, createUserResolver } from "./createUser.zod";
import { useForm } from "@mantine/form";
import { useCallback, useEffect, useState } from "react";
import { UserType } from "../interfaces/UserType";
import { toast, ToastContainer } from "react-toastify";
import {
  AcolytePosition,
  AcolytePositionTranslation,
} from "../interfaces/AcolytePostion";

export default function CreateUserPage() {
  const notify = () => toast.success("Cadastro de usuário criado com sucesso.");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      age: "",
      userType: UserType.ACOLYTE,
      acolytePosition: [],
    },
    validate: createUserResolver,
  });

  const onSubmit = useCallback((data: CreateUserData) => {
    console.log(data);
    notify();
  }, []);

  const [userType, setUserType] = useState<UserType | null>(null);

  useEffect(() => {
    if (userType === UserType.ADMIN) {
      form.setFieldValue("acolytePosition", []);
    }
  }, [userType, form]);

  // useEffect(() => {
  //   console.log("errors: ", form.errors);
  // }, [form]);

  return (
    <div className={styles.page}>
      <h1>Cadastro de usuário</h1>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            label="Nome"
            placeholder="Digite o nome"
            name="name"
            {...form.getInputProps("name")}
          />
          {/* <NumberInput
            label="Idade"
            name="age"
            {...form.getInputProps("age")}
          /> */}

          <TextInput
            label="Idade"
            placeholder="Digite a idade"
            name="age"
            {...form.getInputProps("age")}
          />

          <NativeSelect
            data={[
              { label: "Acólito", value: UserType.ACOLYTE },
              { label: "Administrador", value: UserType.ADMIN },
              { label: "Misto", value: UserType.ADMIN_ACOLYTE },
            ]}
            name="userType"
            {...form.getInputProps("userType")}
            label="Tipo de usuário"
            onChange={(e) => {
              form.getInputProps("userType").onChange(e);

              setUserType(e.currentTarget.value as UserType);
            }}
          />

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            name="email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Senha"
            name="password"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            name="password_confirmation"
            label="Confirme sua senha"
            {...form.getInputProps("password_confirmation")}
          />
          <MultiSelect
            label="Posição"
            placeholder="Escolha ao menos um campo"
            data={[
              {
                label: AcolytePositionTranslation.acolyte1,
                value: AcolytePosition.ACOLYTE1,
              },
              {
                label: AcolytePositionTranslation.acolyte2,
                value: AcolytePosition.ACOLYTE2,
              },
              {
                label: AcolytePositionTranslation.master_of_ceremonies,
                value: AcolytePosition.MASTER_OF_CEREMONIES,
              },
              {
                label: AcolytePositionTranslation.thurifer,
                value: AcolytePosition.THURIFER,
              },
              {
                label: AcolytePositionTranslation.boat_bearer,
                value: AcolytePosition.BOAT_BEARER,
              },
              {
                label: AcolytePositionTranslation.crucifer,
                value: AcolytePosition.CRUCIFER,
              },
            ]}
            name="acolytePosition"
            {...form.getInputProps("acolytePosition")}
            disabled={userType === UserType.ADMIN}
          />

          <Button type="submit">Criar usuário</Button>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
}
