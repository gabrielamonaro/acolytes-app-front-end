"use client";
import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
// import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
import { IDaySchedule } from "@/app/interfaces/DaySchedule";
import { MassTypeTranslation } from "@/app/interfaces/MassTypes";
// import { MassTypeTranslation } from "@/app/interfaces/MassTypes";
import { Container, Modal, Stack, Title } from "@mantine/core";
// import { ModalButton } from "./ModalButton";
import { Tabs } from "@mantine/core";
import { ModalButton } from "./ModalButton";

interface ICalendarModal {
  opened: boolean;
  onClose: () => void;
  data: IDaySchedule;
}
export function CalendarModal({ opened, onClose, data }: ICalendarModal) {
  //   const title = ` ${data.day} | ${MassTypeTranslation[data.type]}`;
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
            <Container>
              <Title order={2}>
                {data.day} | {MassTypeTranslation[item.type]}
              </Title>
              <Title order={4}>
                {item.father} | Capela Nossas Senhora das Dores - Arujá
              </Title>

              <Stack>
                <ModalButton
                  position={AcolytePosition.ACOLYTE1}
                  name={item.acolytes?.acolyte1 || ""}
                />
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
          </Tabs.Panel>
        ))}
      </Tabs>
    </Modal>
  );
}
