import { z } from "zod";

const detailEntrySchema = z.object({
  plan_in_the_next_12_months: z
    .string()
    .min(50, {
      message: "Kế hoạch trong 12 tháng tới phải có ít nhất 50 ký tự",
    })
    .max(200, {
      message: "Kế hoạch trong 12 tháng tới tối đa chỉ được 200 ký tự",
    }),
  how_do_people_think_about_you: z
    .string()
    .min(50, {
      message: "Mọi người nghĩ gì về bạn phải có ít nhất 50 ký tự",
    })
    .max(200, {
      message: "Mọi người nghĩ gì về bạn tối đa chỉ được 200 ký tự",
    }),
  specialized_answer: z
    .string()
    .min(50, {
      message: "Câu hỏi chuyên môn phải có ít nhất 50 ký tự",
    })
    .max(200, {
      message: "Câu hỏi chuyên môn tối đa chỉ được 200 ký tự",
    }),
  portfolio_link: z
    .string()
    .url({ message: "Portfolio link must be a valid URL" })
    .regex(/^https:\/\/drive\.google\.com\/.+$/, {
      message:
        "Liên kết portfolio phải là một liên kết Google Drive (https://drive.google.com/...)",
    }),
  link_CV_resume: z
    .string()
    .url({ message: "CV link must be a valid URL" })
    .regex(/^https:\/\/drive\.google\.com\/.+$/, {
      message:
        "Liên kết CV/Resume phải là một liên kết Google Drive (https://drive.google.com/...)",
    }),
});

const detailSchema = z.record(
  z.string(),
  z.record(z.string(), detailEntrySchema.partial())
);

export default () => ({ schema: detailSchema, entrySchema: detailEntrySchema });

export type Detail = z.output<typeof detailSchema>;
export type DetailEntry = z.output<typeof detailEntrySchema>;
