<script
  lang="ts"
  setup
  generic="T extends Record<string, string | number | null | undefined>"
>
import type { ZodType } from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

type FieldConfig = TypesConfigsField<T>;

const model = defineModel<T>({ required: true });

const props = defineProps<{
  schema: ZodType<T>;
  fields: FieldConfig[];
  ui?: {
    root?: string;
    wrapper?: string;
  };
  submitText?: string;
}>();

const emit = defineEmits<{ (e: "submit", data: T): void }>();

function handleSubmit(event: FormSubmitEvent<T>) {
  emit("submit", event.data);
}
</script>

<template>
  <UForm
    :schema="props.schema"
    :state="model"
    :class="props.ui?.root"
    @submit="handleSubmit"
  >
    <slot name="header" />
    <div :class="props.ui?.wrapper">
      <template v-for="field in props.fields" :key="field.name as string">
        <UFormField
          :label="field.label"
          :name="field.name"
          :help="field.help"
          :required="field.required"
        >
          <LazyUInput
            v-if="field.block === 'input'"
            v-model="model[field.name]"
            hydrate-on-visible
            class="w-full"
            :type="field.type || 'text'"
          />

          <LazyUTextarea
            v-else-if="field.block === 'textarea'"
            v-model="model[field.name]"
            hydrate-on-visible
            class="w-full"
            :rows="field.rows ?? 3"
          />

          <LazyUSelect
            v-else-if="field.block === 'select'"
            v-model="model[field.name]"
            hydrate-on-visible
            class="w-full"
            :options="field.options || []"
          />
        </UFormField>
      </template>
    </div>
    <slot name="actions">
      <div class="pt-4">
        <UButton type="submit"> {{ props.submitText ?? "Submit" }} </UButton>
      </div>
      <slot name="trailing-actions" />
    </slot>
  </UForm>
</template>
