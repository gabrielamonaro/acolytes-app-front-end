"use client";
import { IDaySchedule } from "@/app/interfaces/DaySchedule";
import { Modal } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { ModalForm } from "./ModalForm";

interface ICalendarModal {
  opened: boolean;
  onClose: () => void;
  data: IDaySchedule;
}
export function CalendarModal({ opened, onClose, data }: ICalendarModal) {
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

        {data.masses?.map((item) => {
          return (
            <Tabs.Panel value={item.hour} key={item.hour}>
              <ModalForm mass={item} day={data.day} />
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </Modal>
  );
}
