<script lang="ts" setup>
const notes = [
  "Bạn cần chuẩn bị email học sinh để xác thực.",
  "Thông tin đăng ký phải chính xác, nếu phát hiện gian lận sẽ bị loại.",
  "Sau khi đăng ký, hãy kiểm tra email để nhận mã xác thực.",
  "Mỗi email chỉ được nhận 2 mã xác thực một ngày.",
  "Nếu bạn không nhận được mã xác thực, hãy kiểm tra thư mục Spam hoặc Quảng cáo.",
  "Bạn chỉ được nộp đơn 10 lần trong một ngày.",
  "Nếu có thắc mắc, hãy liên hệ qua trang Liên hệ.",
];
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-x-hidden">
    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
      <h1 class="text-2xl font-bold mb-4 text-center text-highlighted">Lưu ý trước khi đăng kí</h1>
      <ul class="list-disc list-inside text-base text-gray-700 dark:text-gray-200 space-y-2 text-left w-full">
        <li v-for="(note, idx) in notes" :key="idx">{{ note }}</li>
      </ul>
    </div>
    <h2 class="mt-16 text-3xl font-bold text-center text-highlighted select-none">
      Made by
      <span class="rainbow-text">MHPTeam Leader</span>
      &amp;
      <span class="rainbow-text">Khoa Trinh</span>
      with 🔥❤️‍🔥
    </h2>
  </div>
</template>

<style scoped>
.rainbow-text {
  background: linear-gradient(90deg, #ff5252, #ffb142, #fffa65, #32ff7e, #18dcff, #7d5fff, #ff5252);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s ease-in-out infinite;
  font-weight: bold;
}
@keyframes rainbow {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>