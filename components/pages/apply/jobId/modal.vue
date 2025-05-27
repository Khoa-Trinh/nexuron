<script lang="ts" setup>
const isOpen = defineModel<boolean>("open", { default: false });
const props = defineProps<{ title?: string }>();

const { guard } = useUtilsConfirm(isOpen);

function handleToggle(value: boolean) {
  guard(value);
}
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :title="props.title"
    @update:open="handleToggle"
  >
    <template #body>
      <slot />
    </template>
  </UModal>
</template>
