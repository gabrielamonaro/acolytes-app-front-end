"use client";

import { Anchor, Group, PasswordInput, Text } from "@mantine/core";

export function ForgotPasswordInput() {
  return (
    <>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" fw={500}>
          Senha
        </Text>

        <Anchor
          href="#"
          onClick={(event) => event.preventDefault()}
          pt={2}
          fw={500}
          fz="xs"
        >
          Esqueceu sua senha?
        </Anchor>
      </Group>
      <PasswordInput placeholder="Sua senha" id="your-password" />
    </>
  );
}
