<script lang="ts" setup>
type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
};

type Column = {
  title: string;
  items: NavItem[];
};

const props = defineProps<{ columns: Column[] }>();

function handleInternalClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <div
    class="grid gap-y-8 gap-x-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm leading-6 text-muted-foreground"
  >
    <template v-for="(col, idx) in props.columns" :key="idx">
      <ul class="space-y-2">
        <li class="mb-3 text-base font-semibold tracking-wide text-foreground">
          {{ col.title }}
        </li>

        <li v-for="(item, i) in col.items" :key="i">
          <a
            v-if="item.external"
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="inline-flex"
          >
            <UButton variant="link" color="neutral">{{ item.label }}</UButton>
          </a>

          <NuxtLink
            v-else-if="item.href"
            :to="item.href"
            class="inline-flex"
            @click="handleInternalClick"
          >
            <UButton variant="link" color="neutral">{{ item.label }}</UButton>
          </NuxtLink>

          <span v-else class="cursor-default select-none text-muted">{{
            item.label
          }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>
