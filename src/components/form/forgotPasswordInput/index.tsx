"use client";

import { Anchor, Flex, PasswordInput, PasswordInputProps } from "@mantine/core";

type ForgotPasswordInputProps = PasswordInputProps;
export function ForgotPasswordInput(props: ForgotPasswordInputProps) {
  return (
    <>
      <Flex justify="space-between" direction="column">
        <PasswordInput
          placeholder="Sua senha"
          id="your-password"
          label="Senha"
          {...props}
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
      </Flex>
    </>
  );
}
