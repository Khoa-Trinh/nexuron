<script lang="ts" setup>
const route = useRoute();

const filterSearch = computed(() => (route.query.search ?? "").toString());
const filterName = computed(() =>
  (route.query.name ?? "all").toString().trim()
);
const filterSubName = computed(() =>
  (route.query.subname ?? "all").toString().trim()
);
const filterRole = computed(() =>
  (route.query.role ?? "all").toString().trim()
);
</script>

<template>
  <div class="flex-1 py-20">
    <div class="text-3xl font-semibold text-highlighted mb-6">
      Tuyển thành viên
    </div>
    <div class="text-sm text-toned space-y-2 mb-10">
      <div>Sorting by:</div>
      <LazyPagesJobsFilters
        hydrate-on-interaction="mouseover"
        :f-name="filterName"
        :f-role="filterRole"
        :f-search="filterSearch"
        :f-sub-name="filterSubName"
      />
    </div>

    <PagesJobsCards
      :f-name="filterName"
      :f-role="filterRole"
      :f-search="filterSearch"
      :f-sub-name="filterSubName"
    />
  </div>
</template>
