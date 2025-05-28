"use client";
import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
import { IDaySchedule } from "@/app/interfaces/DaySchedule";
import { LiturgicalColor } from "@/app/interfaces/LiturgicalColor";
import { MassType } from "@/app/interfaces/MassTypes";

// Função para gerar os dados fake
export const generateFakeData = (): IDaySchedule[] => {
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

  const massTypes = [
    MassType.LOW,
    MassType.SUNG,
    // MassType.HIGH,
    // MassType.PONTIFICAL,
  ];

  const colors = [
    LiturgicalColor.PURPLE,
    LiturgicalColor.WHITE,
    LiturgicalColor.GREEN,
    LiturgicalColor.RED,
    LiturgicalColor.BLACK,
  ];

  const getRandomName = () =>
    acolytes[Math.floor(Math.random() * acolytes.length)];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  const getRandomMassType = () =>
    massTypes[Math.floor(Math.random() * massTypes.length)];

  // Aqui a geração dos 31 dias
  return Array.from({ length: 31 }, (_, index) => ({
    day: index + 1,
    color: getRandomColor(),
    masses: [
      {
        type: getRandomMassType(),
        father: "Olivieri Toti",
        acolytes: {
          [AcolytePosition.ACOLYTE1]: getRandomName(),
          [AcolytePosition.ACOLYTE2]: getRandomName(),
          [AcolytePosition.THURIFER]: getRandomName(),
          [AcolytePosition.MASTER_OF_CEREMONIES]: getRandomName(),
          [AcolytePosition.CRUCIFER]: null,
        },
        hour: "08:00",
      },
      {
        type: getRandomMassType(),
        acolytes: {
          [AcolytePosition.ACOLYTE1]: getRandomName(),
          [AcolytePosition.ACOLYTE2]: getRandomName(),
          [AcolytePosition.THURIFER]: getRandomName(),
          [AcolytePosition.MASTER_OF_CEREMONIES]: getRandomName(),
          [AcolytePosition.CRUCIFER]: null,
        },
        hour: "10:00",
      },
    ],
  }));
};
