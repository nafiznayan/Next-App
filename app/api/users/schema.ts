import { z } from "zod";
import { email } from "zod/v4";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  // age: z.number(),
});

export default schema;
