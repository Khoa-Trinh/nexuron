<script lang="ts" setup>
const props = defineProps<{ class?: string }>();
</script>

<template>
  <NuxtLink to="/" :class="props.class">
    <UIcon name="i-custom-logo" class="size-24!" />
  </NuxtLink>
</template>
