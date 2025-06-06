"use client";

import styles from "./page.module.css";
import { Button, TextInput } from "@mantine/core";
import { SignInFormData, loginFormResolver } from "./login.zod";
import { useForm } from "@mantine/form";
import { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ForgotPasswordInput } from "@/components/form/ForgotPasswordInput";

export default function LoginPage() {
  const notify = () => toast.success("Login realizado com sucesso.");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: loginFormResolver,
  });

  const onSubmit = useCallback((data: SignInFormData) => {
    console.log(data);
    notify();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Acolytes app</h1>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            name="email"
            {...form.getInputProps("email")}
          />
          <ForgotPasswordInput
            name="password"
            {...form.getInputProps("password")}
          />
          <Button type="submit">Entrar</Button>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
}
