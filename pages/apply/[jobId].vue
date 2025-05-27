<script lang="ts" setup>
const route = useRoute();
const { jobId } = route.params as { jobId: string };
const { role } = route.query as { role: string };
</script>

<template>
  <PagesApplyJobId :job-id="jobId" :role="role" />
</template>
