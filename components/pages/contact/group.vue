<script setup lang="ts">
import { NuxtLink } from "#components";
import { motion } from "motion-v";
type Props = {
  title: string;
  titleClass?: string;
  contactType: "normal" | "partner";
};
const props = defineProps<Props>();

const MNuxtLink = motion.create(NuxtLink);
</script>

<template>
  <section class="w-full flex flex-col items-center gap-8">
    <h2 :class="props.titleClass" class="text-3xl font-bold text-highlighted">
      {{ props.title }}
    </h2>

    <motion.div
      :variants="animationsGrid().container"
      initial="hidden"
      animate="show"
      class="w-full lg:max-w-3xl grid gap-8 sm:grid-cols-2 md:grid-cols-3"
    >
      <MNuxtLink
        v-for="contact in constantsContacts(props.contactType)"
        :key="contact.name"
        :variants="animationsGrid().children"
        :href="contact.url"
        target="_blank"
        rel="noopener"
        class="group"
      >
        <UCard
          :ui="{
            body: 'flex flex-col items-center gap-4 px-6 py-8',
          }"
          class="transition-transform duration-150 group-hover:-translate-y-1 group-hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:-translate-y-1"
        >
          <UIcon
            :name="contact.icon"
            size="32"
            class="text-primary transition-colors duration-150 group-hover:text-highlighted"
          />
          <p class="text-base font-medium text-center text-foreground">
            {{ contact.name }}
          </p>
        </UCard>
      </MNuxtLink>
    </motion.div>
  </section>
</template>
