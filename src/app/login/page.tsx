import styles from "./page.module.css";
import { ForgotPasswordInput } from "@/components/form/forgotPasswordInput";
import { Button, TextInput } from "@mantine/core";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <h1>Acolytes app</h1>
      <main className={styles.main}>
        <form className={styles.form}>
          <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          <ForgotPasswordInput />
          <Button component={Link} href="/">
            Entrar
          </Button>
        </form>
      </main>
    </div>
  );
}
