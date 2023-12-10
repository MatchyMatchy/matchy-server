import { z } from "zod";

export const join_event = z.object({
  room_id: z.string(),
  user_id: z.string(),
});
