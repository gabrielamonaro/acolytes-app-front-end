"use client";
import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
import { IMass } from "@/app/interfaces/DaySchedule";
import { MassType, MassTypeTranslation } from "@/app/interfaces/MassTypes";
import { Container, Stack, Title } from "@mantine/core";
import { MdOutlineEdit } from "react-icons/md";
import { useCallback, useState } from "react";
import { LiaSave } from "react-icons/lia";
import { useForm } from "@mantine/form";
import styles from "./../modal.module.css";
import {
  DayScheduleFormData,
  dayScheduleFormResolver,
} from "../DaySchedule.zod";
import IconButton from "@/components/IconButton";
import { SelectAcolyte } from "../SelectAcolyte";

interface IModalForm {
  mass: IMass;
  day: number;
}
export function ModalForm({ mass, day }: IModalForm) {
  const [isEdition, setIsEdition] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      massType: mass.type || "",
      acolyte1: mass.acolytes.acolyte1 || "",
      acolyte2: mass.acolytes.acolyte2 || "",
      master_of_ceremonies: mass.acolytes.master_of_ceremonies || "",
      thurifer: mass.acolytes.thurifer || "",
      crucifer: mass.acolytes.crucifer || "",
      boat_bearer: mass.acolytes.boat_bearer || "",
    },
    validate: dayScheduleFormResolver,
  });

  const onSubmit = useCallback((data: DayScheduleFormData) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={form.onSubmit(onSubmit)} className={styles.form}>
      <Container>
        <Container display="flex">
          <div>
            <Title order={2}>
              {day} | {MassTypeTranslation[mass.type]}
            </Title>
            <Title order={4}>Capela Nossas Senhora das Dores - Arujá</Title>
          </div>
          <Container>
            <IconButton
              icon={isEdition ? LiaSave : MdOutlineEdit}
              action={() => {
                if (isEdition) {
                  form.onSubmit(onSubmit);
                }
                setIsEdition(!isEdition);
              }}
              type={isEdition ? "button" : "submit"}
            />
          </Container>
        </Container>

        <Stack>
          <SelectAcolyte
            name={AcolytePosition.ACOLYTE1}
            isEdition={isEdition}
            {...form.getInputProps(AcolytePosition.ACOLYTE1)}
            value={form.getInputProps(AcolytePosition.ACOLYTE1).defaultValue}
            massType={mass.type}
          />
          <SelectAcolyte
            name={AcolytePosition.ACOLYTE2}
            isEdition={isEdition}
            {...form.getInputProps(AcolytePosition.ACOLYTE2)}
            value={form.getInputProps(AcolytePosition.ACOLYTE2).defaultValue}
            massType={mass.type}
          />

          {mass.type === MassType.SUNG && (
            <>
              <SelectAcolyte
                name={AcolytePosition.MASTER_OF_CEREMONIES}
                isEdition={isEdition}
                {...form.getInputProps(AcolytePosition.MASTER_OF_CEREMONIES)}
                value={
                  form.getInputProps(AcolytePosition.MASTER_OF_CEREMONIES)
                    .defaultValue
                }
                massType={mass.type}
              />
              <SelectAcolyte
                name={AcolytePosition.THURIFER}
                isEdition={isEdition}
                {...form.getInputProps(AcolytePosition.THURIFER)}
                value={
                  form.getInputProps(AcolytePosition.THURIFER).defaultValue
                }
                massType={mass.type}
              />
              <SelectAcolyte
                name={AcolytePosition.CRUCIFER}
                isEdition={isEdition}
                {...form.getInputProps(AcolytePosition.CRUCIFER)}
                value={
                  form.getInputProps(AcolytePosition.CRUCIFER).defaultValue
                }
                massType={mass.type}
              />
            </>
          )}
        </Stack>
      </Container>
    </form>
  );
}
