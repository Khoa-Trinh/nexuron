<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

const MUCard = motion.create(UCard);
</script>

<template>
  <div class="flex-1 flex flex-col items-center py-16 gap-16">
    <h1 class="text-3xl text-center">🔥🗣️</h1>
    <motion.div
      :variants="animationsGrid().container"
      initial="hidden"
      animate="show"
      class="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
    >
      <MUCard
        v-for="f in constantsFounders()"
        :key="f.name"
        :variants="animationsGrid().children"
        variant="outline"
        :ui="{
          root: 'h-fit',
          body: 'flex flex-col items-center p-8 lg:p-12',
        }"
      >
        <img
          :src="'/founders/' + f.img"
          :alt="f.name"
          class="size-32 object-cover rounded-full mb-4 border-3 border-primary"
        >
        <div class="text-xl font-semibold mb-1 text-primary">{{ f.name }}</div>
        <div class="text-sm text-center mb-2 text-muted">{{ f.role }}</div>
        <div class="text-base text-center text-toned">
          {{ f.desc }}
        </div>
      </MUCard>
    </motion.div>
  </div>
</template>
