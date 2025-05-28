import { zodResolver } from "@mantine/form";
import { z } from "zod";

export const dayScheduleSchema = z.object({
  massType: z.string().min(1),
  acolyte1: z.string().optional(),
  acolyte2: z.string().optional(),
  master_of_ceremonies: z.string().optional(),
  thurifer: z.string().optional(),
  crucifer: z.string().optional(),
  boat_bearer: z.string().optional(),
});

export type DayScheduleFormData = z.infer<typeof dayScheduleSchema>;

export const dayScheduleFormResolver = zodResolver(dayScheduleSchema);
