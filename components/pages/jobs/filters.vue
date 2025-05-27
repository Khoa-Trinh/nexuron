<script lang="ts" setup>
type Props = {
  fRole: string;
  fName: string;
  fSubName: string;
  fSearch: string;
};

const props = defineProps<Props>();

const route = useRoute();
const router = useRouter();

const nameValue = ref("");
const jiValue = ref("all");
const jisValue = ref("all");
const rValue = ref("all");

watch(
  () => route.query,
  () => {
    nameValue.value = route.query.search ? props.fSearch : "";
    jiValue.value = route.query.name ? props.fName : "all";
    jisValue.value = route.query.subname ? props.fSubName : "all";
    rValue.value = route.query.role ? props.fRole : "all";
  },
  { immediate: true }
);

const jobId = computed(() => {
  const seen = new Set<string>();
  team().forEach((t) => {
    if (jisValue.value === "all" || jisValue.value === t.subName) {
      if (t.name) seen.add(t.name);
    }
  });
  return [
    { label: "Tất cả", value: "all" },
    ...Array.from(seen).map((name) => ({ label: name, value: name })),
  ];
});

const jobIdSub = computed(() => {
  const seen = new Set<string>();
  team().forEach((t) => {
    if (jiValue.value === "all" || jiValue.value === t.name) {
      if (t.subName) seen.add(t.subName);
    }
  });
  return [
    { label: "Tất cả", value: "all" },
    ...Array.from(seen).map((sub) => ({ label: sub, value: sub })),
  ];
});

const role = [
  { label: "Tất cả", value: "all" },
  ...["member", "vice", "head"].map((role) => ({
    label: role.charAt(0).toUpperCase() + role.slice(1),
    value: role,
  })),
];

watch(
  () => [nameValue.value, jiValue.value, jisValue.value, rValue.value],
  ([search, name, sub, role]) => {
    const next: Record<string, string> = {};
    if (search) next.search = search;
    if (name !== "all") next.name = name;
    if (sub !== "all") next.subname = sub;
    if (role !== "all") next.role = role;

    const cur = route.query;
    const identical =
      Object.keys(next).length === Object.keys(cur).length &&
      Object.entries(next).every(([k, v]) => cur[k] === v);

    if (!identical) router.replace({ query: next });
  }
);

watch(
  () => jisValue.value,
  (newValue) => {
    if (newValue === "all") return;
    const match = team().find((t) => t.subName === newValue);
    if (match) jiValue.value = match.name;
  }
);
</script>

<template>
  <div class="flex gap-2">
    <UInput v-model="nameValue" class="flex-3" placeholder="Sort by name..." />
    <USelect v-model="jiValue" class="flex-1" :items="jobId" />
    <USelect v-model="jisValue" class="flex-1" :items="jobIdSub" />
    <USelect v-model="rValue" class="flex-1" :items="role" />
  </div>
</template>
