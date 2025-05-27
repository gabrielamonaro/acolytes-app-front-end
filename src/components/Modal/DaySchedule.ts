import { zodResolver } from "@mantine/form";
import { z } from "zod";

export const dayScheduleSchema = z.object({
  massType: z.string().min(1),
  father: z.string().min(1),
  acolyte1: z.string().min(1),
  acolyte2: z.string().min(1),
  master_of_ceremonies: z.string().min(1),
  thurifer: z.string().min(1),
  crucifer: z.string().min(1),
  boat_bearer: z.string().min(1),
});

export type DayScheduleFormData = z.infer<typeof dayScheduleSchema>;

export const dayScheduleFormResolver = zodResolver(dayScheduleSchema);
