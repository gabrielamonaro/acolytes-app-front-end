"use client";
import {
  AcolytePosition,
  AcolytePositionTranslation,
} from "@/app/interfaces/AcolytePostion";
import { Button } from "@mantine/core";
import { FaCircle } from "react-icons/fa";

interface IModalButton {
  position: AcolytePosition;
  name?: string;
}
export function ModalButton({ position, name }: IModalButton) {
  //   const title = ` ${data.day} | ${MassTypeTranslation[data.type]}`;
  const icon = <FaCircle size="12px" color={name ? "green" : "lightgray"} />;
  return (
    <Button
      color="gray"
      variant="transparent"
      leftSection={icon}
      justify="flex-start"
    >
      {AcolytePositionTranslation[position]} {name ? `- ${name}` : ""}
    </Button>
  );
}
