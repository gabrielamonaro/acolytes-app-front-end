"use client";
import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
// import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
import { IDaySchedule } from "@/app/interfaces/DaySchedule";
import { MassTypeTranslation } from "@/app/interfaces/MassTypes";
// import { MassTypeTranslation } from "@/app/interfaces/MassTypes";
import {
  Container,
  Flex,
  Modal,
  NativeSelect,
  Stack,
  Title,
} from "@mantine/core";
// import { ModalButton } from "./ModalButton";
import { Tabs } from "@mantine/core";
import { ModalButton } from "./ModalButton";
import IconButton from "../IconButton";
import { MdOutlineEdit } from "react-icons/md";
import { useCallback, useState } from "react";
import { LiaSave } from "react-icons/lia";
import { useForm } from "@mantine/form";
import { DayScheduleFormData, dayScheduleFormResolver } from "./DaySchedule";
import { FaCircle } from "react-icons/fa";
import styles from "./modal.module.css";

interface ICalendarModal {
  opened: boolean;
  onClose: () => void;
  data: IDaySchedule;
}
export function CalendarModal({ opened, onClose, data }: ICalendarModal) {
  const [isEdition, setIsEdition] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      massType: "1",
      father: "1",
      acolyte1: "1",
      acolyte2: "1",
      master_of_ceremonies: "1",
      thurifer: "1",
      crucifer: "1",
      boat_bearer: "1",
    },
    validate: dayScheduleFormResolver,
  });

  const onSubmit = useCallback((data: DayScheduleFormData) => {
    console.log(data);
  }, []);

  return (
    <Modal opened={opened} onClose={onClose} size="xl" centered>
      <Tabs defaultValue={data.masses[0].hour}>
        <Tabs.List>
          {data.masses?.map((item) => (
            <Tabs.Tab value={item.hour} key={item.hour}>
              {item.hour}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {data.masses?.map((item) => (
          <Tabs.Panel value={item.hour} key={item.hour}>
            <form onSubmit={form.onSubmit(onSubmit)}>
              <Container>
                <Container display="flex">
                  <div>
                    <Title order={2}>
                      {data.day} | {MassTypeTranslation[item.type]}
                    </Title>
                    <Title order={4}>
                      {item.father} | Capela Nossas Senhora das Dores - Arujá
                    </Title>
                  </div>
                  <Container>
                    <IconButton
                      icon={isEdition ? LiaSave : MdOutlineEdit}
                      action={() => {
                        if (isEdition) {
                          form.onSubmit(onSubmit);
                          console.log("Salvando...");
                        }
                        setIsEdition(!isEdition);
                      }}
                      type={isEdition ? "button" : "submit"}
                    />
                  </Container>
                </Container>

                <Stack>
                  <ModalButton
                    position={AcolytePosition.ACOLYTE1}
                    name={item.acolytes?.acolyte1 || ""}
                  />
                  <Flex align="center" gap="4px">
                    <FaCircle size="12px" color="green" />
                    <NativeSelect
                      data={["React", "Angular", "Vue"]}
                      variant="unstyled"
                      classNames={{
                        section: styles.disabled,
                        root: styles.disabled,
                      }}
                      disabled
                    />
                  </Flex>

                  <ModalButton
                    position={AcolytePosition.ACOLYTE2}
                    name={item.acolytes?.acolyte2 || ""}
                  />
                  <ModalButton
                    position={AcolytePosition.MASTER_OF_CEREMONIES}
                    name={item.acolytes?.master_of_ceremonies || ""}
                  />
                  <ModalButton
                    position={AcolytePosition.THURIFER}
                    name={item.acolytes?.thurifer || ""}
                  />
                  <ModalButton
                    position={AcolytePosition.CRUCIFER}
                    name={item.acolytes?.crucifer || ""}
                  />
                </Stack>
              </Container>
            </form>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Modal>
  );
}
