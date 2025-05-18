<script lang="ts" setup>
const founders = [
  {
    name: "Trần Minh Hiếu",
    role: "Founder & Leader nhiệm kì 2025-2026",
    img: "founders/tranminhhieu.png",
    desc: "Trưởng nhóm, định hướng phát triển dự án.",
  },
  {
    name: "Trịnh Đăng Khoa",
    role: "Expert & Co-Founder",
    img: "founders/trinhdangkhoa.png",
    desc: "Frontend & Mang ý tưởng đến với công chúng.",
  },
  {
    name: "Cao Minh Quốc Thái",
    role: "Expert (Cố vấn)",
    img: "founders/caominhquocthai.png",
    desc: "Nghiên cứu thuật toán & cố vấn cho nhóm.",
  },
  // Thêm các thành viên khác tại đây
];
</script>

<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-12">
    <h1 class="text-3xl font-bold mb-10 text-center text-highlighted">🔥🗣️</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      <div
        v-for="f in founders"
        :key="f.name"
        class="bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-6"
      >
        <img
          :src="f.img"
          :alt="f.name"
          class="w-32 h-32 object-cover rounded-full mb-4 border-4 border-highlighted"
        />
        <div class="text-xl font-semibold mb-1">{{ f.name }}</div>
        <div class="text-sm text-gray-500 mb-2">{{ f.role }}</div>
        <div class="text-base text-center text-gray-700 dark:text-gray-200">{{ f.desc }}</div>
      </div>
    </div>
  </div>
</template>