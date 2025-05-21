<script lang="ts" setup>
interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink to="/" :class="props.class" class="flex items-center h-10">
    <UIcon name="i-custom-logo" class="text-highlighted size-[100rem]" />
  </NuxtLink>
</template>
