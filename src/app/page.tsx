"use client";
import { SimpleGrid } from "@mantine/core";
import styles from "./page.module.css";
import { format } from "date-fns";
import { LiturgicalColor } from "./interfaces/LiturgicalColor";
import { useDisclosure } from "@mantine/hooks";
import { CalendarModal } from "@/components/Modal";
import { fakeData } from "@/data/fakeData";
import { useMemo, useState } from "react";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  const monthOpenningWeekDay = 4;
  const emptyValuesArray = Array.from({ length: monthOpenningWeekDay - 1 });
  const daysOfWeekLabel = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const colorClasses = {
    [LiturgicalColor.PURPLE]: styles.purple,
    [LiturgicalColor.WHITE]: styles.white,
    [LiturgicalColor.GREEN]: styles.green,
    [LiturgicalColor.RED]: styles.red,
    [LiturgicalColor.BLACK]: styles.black,
  };

  const [selectedId, setSelectdId] = useState<null | number>();
  const selectedDay = useMemo(() => {
    return fakeData.find((item) => item.day === selectedId);
  }, [selectedId]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.currentMonthLabel}>
            {format(new Date(), "MMM, yy")}{" "}
          </div>
          <SimpleGrid
            cols={7}
            spacing={10}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {daysOfWeekLabel.map((item) => (
              <div className={styles.daysOfWeekLabel} key={item}>
                {item}
              </div>
            ))}

            {emptyValuesArray.map((item, index) => (
              <div key={index} />
            ))}
            {fakeData.map((item) => (
              <div
                className={colorClasses[item.color] + " " + styles.dayItem}
                key={item.day}
                onClick={() => {
                  open();
                  setSelectdId(item.day);
                }}
              >
                {item.day}
              </div>
            ))}

            {selectedDay && (
              <CalendarModal
                opened={opened}
                onClose={close}
                data={selectedDay}
              />
            )}
          </SimpleGrid>
        </div>
      </main>
    </div>
  );
}
