import { AcolytePosition } from "./AcolytePostion";
import { LiturgicalColor } from "./LiturgicalColor";
import { MassType } from "./MassTypes";

export interface IMass {
  acolytes: {
    [AcolytePosition.ACOLYTE1]: string | null;
    [AcolytePosition.ACOLYTE2]: string | null;
    [AcolytePosition.THURIFER]: string | null;
    [AcolytePosition.MASTER_OF_CEREMONIES]: string | null;
    [AcolytePosition.CRUCIFER]: string | null;
    [AcolytePosition.BOAT_BEARER]: string | null;
  };
  type: MassType;
  hour: string;
}
export interface IDaySchedule {
  day: number;
  color: LiturgicalColor;
  masses: IMass[];
}
