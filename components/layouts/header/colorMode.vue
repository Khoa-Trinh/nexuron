<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(isDark) {
    colorMode.preference = isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly>
    <UButton
      variant="ghost"
      color="neutral"
      class="size-8 p-0 justify-center"
      @click="isDark = !isDark"
    >
      <UIcon :name="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" />
    </UButton>

    <template #fallback>
      <div class="size-8 flex justify-center items-center">
        <UIcon name="i-lucide-sun" size="14" />
      </div>
    </template>
  </ClientOnly>
</template>
