import styles from "./page.module.css";
import { ForgotPasswordInput } from "@/components/form/forgotPasswordInput";
import { Button, TextInput } from "@mantine/core";
import Link from "next/link";
import { SignInFormData, signInSchema } from "./login.zod";
import { useState } from "react";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  } as SignInFormData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = signInSchema.safeParse(formValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.page}>
      <h1>Acolytes app</h1>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            onChange={handleChange}
          />
          <ForgotPasswordInput />
          <Button component={Link} href="/">
            Entrar
          </Button>
        </form>
      </main>
    </div>
  );
}
