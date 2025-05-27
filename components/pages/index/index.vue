<script setup lang="ts">
import { UCard } from "#components";
import { motion } from "motion-v";

const MUCard = motion.create(UCard);

const { targetRef, style, onMove, onLeave } = useAnimationsHoverParallax();
</script>

<template>
  <div class="flex-1 flex flex-col justify-center items-center py-16 gap-16">
    <MUCard
      :animate="{
        scale: [0, 1],
        rotate: [180, 0],
      }"
      :transition="{
        duration: 1.5,
        ease: 'backOut',
      }"
      :ui="{ root: 'py-4 ring-primary', body: 'space-y-8' }"
    >
      <div class="text-2xl font-bold text-center text-primary">
        Lưu ý trước khi đăng kí
      </div>

      <ul class="list-disc list-inside space-y-2 text-pretty">
        <li v-for="(note, idx) in constantsNotes()" :key="idx">{{ note }}</li>
      </ul>

      <NuxtLink to="/jobs" class="flex justify-center">
        <div
          ref="targetRef"
          class="flex items-center justify-center"
          @mousemove="onMove"
          @mouseleave="onLeave"
        >
          <UButton size="xl" :style="style">Xem các vị trí tuyển dụng</UButton>
        </div>
      </NuxtLink>
    </MUCard>

    <div class="text-3xl font-bold text-center text-highlighted select-none">
      Made by
      <span class="rainbow-text">MHP</span>
      &amp;
      <span class="rainbow-text">SnK</span>
      with 🔥❤️‍🔥
    </div>
  </div>
</template>

<style scoped>
.rainbow-text {
  background: linear-gradient(
    90deg,
    #ff5252,
    #ffb142,
    #fffa65,
    #32ff7e,
    #18dcff,
    #7d5fff,
    #ff5252
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s ease-in-out infinite;
  display: inline-block;
}
@keyframes rainbow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
