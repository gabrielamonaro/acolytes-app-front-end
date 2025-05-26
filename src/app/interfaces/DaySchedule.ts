import { AcolytePosition } from "./AcolytePostion";
import { LiturgicalColor } from "./LiturgicalColor";
import { MassType } from "./MassTypes";

export interface IDaySchedule {
  day: number;
  color: LiturgicalColor;
  masses: {
    acolytes: {
      [AcolytePosition.ACOLYTE1]: string | null;
      [AcolytePosition.ACOLYTE2]: string | null;
      [AcolytePosition.THURIFER]: string | null;
      [AcolytePosition.MASTER_OF_CEREMONIES]: string | null;
      [AcolytePosition.CRUCIFER]: string | null;
    };
    type: MassType;
    father: string | null;
    hour: string;
  }[];
}
