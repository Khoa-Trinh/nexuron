<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const statusCode = props.error.statusCode || 500;
const title = props.error.statusMessage || "Đã xảy ra sự cố!";
const description =
  props.error.message ||
  "Xin lỗi, có lỗi bất ngờ xảy ra. Vui lòng thử lại sau hoặc quay về trang chủ.";
const stack = props.error.stack || "";
</script>

<template>
  <UContainer
    class="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center"
  >
    <UCard
      class="max-w-lg w-full p-8 backdrop-blur bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl"
    >
      <div class="flex flex-col items-center space-y-4">
        <UIcon name="lucide:alert-triangle" class="h-16 w-16" />
        <h1 class="text-6xl font-bold text-primary">{{ statusCode }}</h1>
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p class="mt-2 text-muted-foreground leading-relaxed">
          {{ description }}
        </p>
        <UButton to="/" class="mt-6">Quay lại trang chủ</UButton>
      </div>
    </UCard>

    <!-- Collapsible stack trace for debugging (hidden by default) -->
    <details v-if="stack" class="max-w-xl w-full mt-8 text-left">
      <summary
        class="cursor-pointer text-sm text-muted-foreground pb-2 hover:underline"
      >
        Chi tiết lỗi (click để xem)
      </summary>
      <pre
        class="whitespace-pre-wrap break-words text-xs bg-muted/40 p-4 rounded-md overflow-auto"
        >{{ stack }}
      </pre>
    </details>
  </UContainer>
</template>

