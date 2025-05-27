type SelectOption = { label: string; value: unknown };
type InputHTMLType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "password"
  | "number"
  | "date"
  | "datetime-local";

export type FieldConfig<
  T extends Record<string, string | number | null | undefined>,
  K extends keyof T & string = keyof T & string
> = {
  name: K;
  label: string;
  block: "input" | "textarea" | "select";
  help?: string;
  required?: boolean;
  type?: InputHTMLType;
  rows?: number;
  options?: SelectOption[];
};
