"use client";
import { Button, SimpleGrid } from "@mantine/core";
import styles from "./page.module.css";
import { format } from "date-fns";
import { LiturgicalColor } from "./interfaces/LiturgicalColor";
import { useDisclosure } from "@mantine/hooks";
import { CalendarModal } from "@/components/Modal";
import { generateFakeData } from "@/Functions/GenerateFakeData";
import { useEffect, useMemo, useState } from "react";
import { IDaySchedule } from "./interfaces/DaySchedule";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [data, setData] = useState<IDaySchedule[]>([]);

  useEffect(() => {
    setData(generateFakeData());
  }, []);
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
    return data.find((item) => item.day === selectedId);
  }, [data, selectedId]);

  console.log("Data: ", data);
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
            {data.map((item) => (
              <div
                key={item.day}
                className={colorClasses[item.color] + " " + styles.dayItem}
                style={{ width: "100%" }}
              >
                <Button
                  onClick={() => {
                    open();
                    setSelectdId(item.day);
                  }}
                  fullWidth
                  variant="transparent"
                >
                  {item.day}
                </Button>
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
