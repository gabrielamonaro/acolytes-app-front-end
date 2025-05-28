"use client";

import { Anchor, Flex, PasswordInput, PasswordInputProps } from "@mantine/core";

interface ForgotPasswordInputProps extends PasswordInputProps {
  label?: string;
}
export function ForgotPasswordInput({
  label,
  ...rest
}: ForgotPasswordInputProps) {
  return (
    <>
      <Flex justify="space-between" direction="column">
        <PasswordInput
          placeholder="Sua senha"
          id="your-password"
          label={label || "Senha"}
          {...rest}
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
