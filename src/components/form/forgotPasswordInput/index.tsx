"use client";

import { Anchor, Flex, PasswordInput } from "@mantine/core";
// import { InputHTMLAttributes } from "react";

// type ForgotPasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ForgotPasswordInput() {
  return (
    <>
      <Flex justify="space-between" direction="column">
        <PasswordInput
          placeholder="Sua senha"
          id="your-password"
          label="Senha"
        />
        <Anchor
          href="#"
          onClick={(event) => event.preventDefault()}
          pt={2}
          fw={500}
          fz="xs"
        >
          Esqueceu sua senha?
        </Anchor>
        <input />
      </Flex>
    </>
  );
}
