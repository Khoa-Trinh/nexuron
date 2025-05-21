<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

const route = useRoute();

const childrenItems = computed(() => {
  const seen = new Set<string>();
  return team()
    .map((str) => {
      const label = str.name === "None" ? str.subName : str.name;

      const to = {
        path: "/jobs",
        query:
          str.name === "None"
            ? { name: "None", subname: str.subName }
            : { name: str.name },
      };

      const active =
        route.path === "/jobs" &&
        String(route.query.name) === str.name &&
        (str.name === "None"
          ? String(route.query.subname) === str.subName
          : true);

      return {
        label,
        icon: str.icon,
        to,
        description: str.navDescription,
        active,
      };
    })
    .filter((item) => {
      if (seen.has(item.label)) return false;
      seen.add(item.label);
      return true;
    });
});

const items = computed<NavigationMenuItem[]>(() => [
  { label: "Trang chủ", icon: "i-lucide-home", to: "/" },
  { 
    label: "Đội ngũ", 
    icon: "i-lucide-user", 
    to: "/founder"
  },
  {
    label: "Tuyển thành viên",
    icon: "i-lucide-users",
    to: "/jobs",
    children: childrenItems.value,
  },
  { label: "Liên hệ", icon: "i-lucide-mail", to: "/contact" },
]);
</script>

<template>
  <div
    class="fixed top-0 flex justify-between items-center h-15 w-full bg-default border-b border-muted px-7 gap-2 z-50"
  >
    <NuxtLink to="/" class="flex-1 flex items-center h-10 w-27">
      <img
        src="/assets/icons/Nexuron-horizon-nobg.png"
        alt="Logo"
        class="w-auto max-h-24"
        style="max-width: 140px;"
      >
    </NuxtLink>
    <div class="flex-4">
      <UNavigationMenu
        :items="items"
        :ui="{
          root: 'w-full justify-center hidden md:flex',
        }"
        highlight
        variant="link"
      />
    </div>
    <div class="flex-1 flex items-center justify-end">
      <UButton
        variant="ghost"
        color="neutral"
        class="size-8 p-0 justify-center "
      >
        <UIcon name="i-lucide-search" />
      </UButton>
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
          variant="ghost"
          color="neutral"
          class="size-8 p-0 justify-center"
          @click="isDark = !isDark"
        >
          <UIcon :name="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" />
        </UButton>
        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
      <USlideover>
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-menu"
          class="size-8 justify-center md:hidden"
        />

        <template #title>
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/assets/icons/Nexuron-horizon-nobg.png" alt="Logo" class="h-12 w-auto max-h-12 object-contain" style="max-width: 140px;" >
          </NuxtLink>
        </template>
        <template #body>
          <UNavigationMenu
            :items="items"
            :ui="{
              root: 'w-full justify-center',
              linkLabel: 'text-base font-semibold',
            }"
            highlight
            variant="link"
            orientation="vertical"
          />
        </template>
        <template #footer/>
      </USlideover>
    </div>
  </div>
</template>