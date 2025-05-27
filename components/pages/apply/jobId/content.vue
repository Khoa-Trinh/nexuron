<script lang="ts" setup>
const props = defineProps<{
  jobId: string;
  role: string;
}>();
</script>

<template>
  <div class="flex-1 flex flex-col gap-2">
    <div
      class="bg-primary text-inverted w-fit px-2 py-1 italic rounded-xs font-medium mb-10"
    >
      Deadline: {{ teamDescription(props.jobId, props.role)?.deadline }}
    </div>
    <div
      v-for="desc in teamDescription(props.jobId, props.role)?.description"
      :key="desc.title"
      class="mb-6"
    >
      <div class="text-3xl font-semibold">{{ desc.title }}</div>
      <div
        class="text-muted-foreground"
        :class="
          desc.isQuestion
            ? 'border mt-4 px-3 py-2 rounded-xs space-y-6'
            : 'pl-10 py-6 space-y-1'
        "
      >
        <li
          v-for="text in desc.description"
          :key="text"
          :class="desc.isQuestion ? 'hidden' : ''"
        >
          {{ text }}
        </li>
        <li
          v-for="(text, i) in desc.description"
          :key="text"
          class="list-none"
          :class="desc.isQuestion ? '' : 'hidden'"
        >
          <div>
            <span class="font-medium">
              {{ "Câu " + (i + 1) + ". " }}
            </span>
            {{ text }}
          </div>
        </li>
      </div>
    </div>
    <div>
      <span class="font-medium"> Chức năng: </span>
      {{ teamDescription(props.jobId, props.role)?.function }}
    </div>
    <div>
      <span class="font-medium"> Chức vụ: </span>
      {{ teamDescription(props.jobId, props.role)?.position }}
    </div>
  </div>
</template>
