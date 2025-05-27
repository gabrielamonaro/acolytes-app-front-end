import { ActionIcon } from "@mantine/core";
import { IconType } from "react-icons";

interface IIconButton {
  icon: IconType;
  action: () => void;
  type: "submit" | "button";
}

export default function IconButton({ icon: Icon, action, type }: IIconButton) {
  return (
    <ActionIcon
      variant="default"
      size="xl"
      aria-label="Settings"
      onClick={action}
      type={type}
    >
      <Icon />
    </ActionIcon>
  );
}
