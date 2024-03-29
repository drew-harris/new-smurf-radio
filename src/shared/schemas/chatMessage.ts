import { z } from "zod";
export const chatMessageSchema = z.object({
  showId: z.string(),
  userName: z.string().nonempty(),
  userId: z.string(),
  message: z.string(),
  timestamp: z.coerce.date(),
  id: z.string(),
});
