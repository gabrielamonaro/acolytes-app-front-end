"use client";
import {
  AcolytePosition,
  // AcolytePositionTranslation,
} from "@/app/interfaces/AcolytePostion";
import { FaCircle } from "react-icons/fa";
import styles from "./../modal.module.css";
import { Flex, NativeSelect, NativeSelectProps } from "@mantine/core";
import { useCallback, useMemo, useState } from "react";
import { MassType } from "@/app/interfaces/MassTypes";

interface ISelectAcolyte extends NativeSelectProps {
  name: AcolytePosition;
  isEdition: boolean;
  value: string;
  massType: MassType;
}
export function SelectAcolyte({
  name,
  isEdition,
  value,
  massType,
  ...rest
}: ISelectAcolyte) {
  const acolytes = [
    "Eduan",
    "Peter",
    "Michael",
    "Lucas",
    "Andrew",
    "Thomas",
    "Paul",
    "David",
  ];

  const getColorToUpdateSignal = useCallback(
    (value: string) => {
      if (value !== "") return "green";

      const isSungMass = massType === MassType.SUNG;
      const isLowMass = massType === MassType.LOW;

      const criticalPositionsSungMass = [
        AcolytePosition.ACOLYTE1,
        AcolytePosition.ACOLYTE2,
        AcolytePosition.MASTER_OF_CEREMONIES,
        AcolytePosition.THURIFER,
      ];

      if (
        (isLowMass && name === AcolytePosition.ACOLYTE1) ||
        (isSungMass && criticalPositionsSungMass.includes(name))
      ) {
        return "red";
      }

      return "lightgray";
    },
    [massType, name]
  );

  const [isFilled, setIsFilled] = useState<"red" | "green" | "lightgray">(
    getColorToUpdateSignal(value)
  );

  const icon = useMemo(
    () => <FaCircle size="12px" color={isFilled} />,
    [isFilled]
  );

  return (
    <Flex align="center" gap="4px">
      {icon}
      <NativeSelect
        data={[
          ...acolytes.map((item) => ({ label: item, value: item })),
          { label: "", value: "" },
        ]}
        variant={isEdition ? "default" : "unstyled"}
        classNames={{
          section: isEdition ? "" : styles.section_disabled,
          root: isEdition ? "" : styles.rootLabel,
        }}
        disabled={!isEdition}
        name={name}
        {...rest}
        onChange={(e) => {
          setIsFilled(getColorToUpdateSignal(e.currentTarget.value));

          if (rest.onChange) {
            rest.onChange(e);
          }
        }}
      />
    </Flex>
  );
}
