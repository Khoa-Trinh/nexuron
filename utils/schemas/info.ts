import { z } from "zod";

const infoSchema = z.object({
  fullname: z.string().min(1, { message: "Họ và tên đầy đủ là bắt buộc" }),

  email: z
    .string()
    .email({ message: "Địa chỉ email không hợp lệ" })
    .refine((e) => e.toLowerCase().endsWith("@ptnk.edu.vn"), {
      message: "Email phải có đuôi @ptnk.edu.vn",
    }),

  phone: z.string().regex(/^0\d{7,14}$/, {
    message: "Số điện thoại phải bắt đầu bằng 0 và chỉ chứa số",
  }),

  github: z
    .string()
    .url({ message: "Invalid URL" })
    .regex(/^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/?$/, {
      message: "Phải là một liên kết GitHub hợp lệ",
    }),

  facebook: z
    .string()
    .url({ message: "Invalid URL" })
    .regex(/^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9_.-]+\/?$/, {
      message: "Phải là một liên kết Facebook hợp lệ",
    }),
});

export default () => infoSchema;

export type Info = z.output<typeof infoSchema>;
