import { AcolytePosition } from "@/app/interfaces/AcolytePostion";
import { IDaySchedule } from "@/app/interfaces/DaySchedule";
import { LiturgicalColor } from "@/app/interfaces/LiturgicalColor";
import { MassType } from "@/app/interfaces/MassTypes";

// Array de nomes fictícios
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

// Função auxiliar para pegar um nome aleatório
const getRandomName = () =>
  acolytes[Math.floor(Math.random() * acolytes.length)];

// Array com tipos de missa
const massTypes = [
  MassType.LOW,
  MassType.SUNG,
  MassType.HIGH,
  MassType.PONTIFICAL,
];

// Array com cores litúrgicas
const colors = [
  LiturgicalColor.PURPLE,
  LiturgicalColor.WHITE,
  LiturgicalColor.GREEN,
  LiturgicalColor.RED,
  LiturgicalColor.BLACK,
];
// Função auxiliar para pegar uma cor aleatória
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Função auxiliar para pegar um tipo aleatório
const getRandomMassType = () =>
  massTypes[Math.floor(Math.random() * massTypes.length)];

// Gerar os 31 dias
export const fakeData: IDaySchedule[] = Array.from(
  { length: 31 },
  (_, index) => ({
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
        father: "Olivieri Toti",
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
  })
);
