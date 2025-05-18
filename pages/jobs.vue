<script lang="ts" setup>
// const route = useRoute();

// const category = computed(() => String(route.query.category || ""));
// const subCategory = computed(() => String(route.query.subCategory || ""));

const route = useRoute();
const filterName = computed(() => route.query.name?.toString() || "");
const filterSubName = computed(() => route.query.subname?.toString() || "");

const cards = computed(() =>
  ["member", "vice", "head"]
    .map((role) =>
      team()
        .map((t) => {
          let label: string;
          let to: string;
          if (t.name === "None" && t.subName) {
            label = t.subName;
            to = t.subName.toLowerCase().replace(/\s+/g, "-");
          } else {
            label = [t.name, t.subName].filter(Boolean).join(" - ");
            to = [t.name, t.subName].filter(Boolean).join("-").toLowerCase().replace(/\s+/g, "-");
          }
          return {
            label,
            icon: t.icon,
            to: `/apply/${to}?role=${role}`,
            description: t.description,
            role,
            name: t.name,
            subName: t.subName,
          };
        })
        .filter((card) => {
  const filterNameValue = filterName.value.trim().toLowerCase();
  const filterSubNameValue = filterSubName.value.trim().toLowerCase();
  //console.log(filterNameValue, filterSubNameValue);
  // If both name and subName are set, match both exactly (must not be undefined)
  if (filterName.value && filterSubName.value) {
    return (
      card.name &&
      card.subName &&
      card.name.toLowerCase() === filterNameValue &&
      card.subName.toLowerCase() === filterSubNameValue
    );
  }
  // If only name is set, match only card.name
  if (filterName.value && filterName.value !== "none") {
    return card.name && card.name.toLowerCase() === filterNameValue;
  }
  // If only subName is set, match only card.subName
  if (filterSubName.value) {
    return card.subName && card.subName.toLowerCase() === filterSubNameValue;
  }
  // Otherwise, show all
  return true;
})
    )
    .flat()
);
console.log(cards.value);
</script>

<template>
  <div class="flex-1 pt-20">
    <div class="text-3xl font-semibold text-highlighted mb-10">
      Tuyển thành viên
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <UCard v-for="(card, index) in cards" :key="index">
        <div class="flex flex-col">
          <div
            class="flex items-center text-highlighted font-medium leading-0 gap-2"
          >
            <UIcon :name="card.icon" />
            {{ card.label }}
          </div>
          <div class="text-sm text-muted my-1">
            {{ card.description }}
          </div>
          <UBadge color="neutral" class="self-start mt-2">{{
            card.role.charAt(0).toUpperCase() + card.role.slice(1)
          }}</UBadge>
          <NuxtLink :to="card.to">
            <UButton
              class="mt-2 self-start"
              size="sm"
              trailing-icon="i-lucide-arrow-right"
            >
              Đăng ký
            </UButton>
          </NuxtLink>
        </div>
      </UCard>
    </div>
  </div>
</template>
