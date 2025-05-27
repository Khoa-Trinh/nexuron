import type { RemovableRef, UseStorageOptions } from "@vueuse/core";
import type { ZodType } from "zod";

export function useValidatedStorage<T>(
  key: string,
  schema: ZodType<T>,
  defaults: T,
  options?: UseStorageOptions<T>
): RemovableRef<T> {
  const storage = useLocalStorage<T>(key, defaults, {
    deep: true,
    ...options,
  });

  const initial = schema.safeParse(storage.value);
  let lastValid: T;

  if (initial.success) {
    lastValid = initial.data;
  } else {
    storage.value = lastValid = structuredClone(defaults);
  }

  watch(
    storage,
    (newVal) => {
      const parsed = schema.safeParse(newVal);
      if (parsed.success) {
        lastValid = parsed.data;
      } else {
        storage.value = lastValid;
      }
    },
    { deep: true }
  );

  return storage;
}
