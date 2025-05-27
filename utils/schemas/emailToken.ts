import { z } from "zod";

const emailTokenSchema = z.object({
  token: z.string().regex(/^[0-9]{64}$/, {
    message: "Mã xác thực phải là 64 chữ số",
  }),
});

export default () => emailTokenSchema;

export type EmailToken = z.output<typeof emailTokenSchema>;
