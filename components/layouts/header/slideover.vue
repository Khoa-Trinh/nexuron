<script lang="ts" setup>
const route = useRoute();
const isOpen = ref(false);

watch(
  () => route.fullPath,
  () => (isOpen.value = false)
);
</script>

<template>
  <USlideover v-model:open="isOpen">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-menu"
      class="size-8 justify-center md:hidden"
    />

    <template #title>
      <SharedLogo />
    </template>
    <template #body>
      <UNavigationMenu
        :items="useConstantsItemsNavigation().value"
        :ui="{
          root: 'w-full justify-center',
          linkLabel: 'text-base font-semibold',
        }"
        highlight
        variant="link"
        orientation="vertical"
      />
    </template>
    <template #footer />
  </USlideover>
</template>
