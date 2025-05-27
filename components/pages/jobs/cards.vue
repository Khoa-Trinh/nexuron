<script lang="ts" setup>
import { UCard } from "#components";
import { motion, AnimatePresence } from "motion-v";

type Props = {
  fRole: string;
  fName: string;
  fSubName: string;
  fSearch: string;
};

const props = defineProps<Props>();
const MUCard = motion.create(UCard);

const rawCards = team().flatMap((t) => {
  const slugBase =
    t.name === "None" && t.subName
      ? t.subName.toLowerCase().replace(/\s+/g, "-")
      : [t.name, t.subName]
          .filter(Boolean)
          .join("-")
          .toLowerCase()
          .replace(/\s+/g, "-");

  const label =
    t.name === "None" && t.subName
      ? t.subName
      : [t.name, t.subName].filter(Boolean).join(" - ");

  return ["member", "vice", "head"].map((role) => ({
    label,
    icon: t.icon,
    to: `/apply/${slugBase}?role=${role}`,
    description: t.description,
    role,
    name: t.name ?? "",
    subName: t.subName ?? "",
  }));
});

const cards = computed(() =>
  rawCards.filter((card) => {
    if (props.fRole !== "all" && card.role !== props.fRole) return false;

    if (props.fName !== "all" && card.name !== props.fName) return false;
    if (props.fSubName !== "all" && card.subName !== props.fSubName)
      return false;

    if (props.fSearch) {
      const haystack = `${card.label} ${card.description ?? ""}`
        .toLowerCase()
        .replace(/[-–—]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (!haystack.includes(props.fSearch)) return false;
    }
    return true;
  })
);
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <AnimatePresence mode="popLayout">
      <MUCard
        v-for="card in cards"
        :key="card.to"
        :variants="animationsGrid().children"
        initial="hidden"
        animate="show"
        layout
      >
        <div class="flex flex-col">
          <div class="flex items-center font-medium gap-2">
            <UIcon :name="card.icon" />
            <div class="max-w-52">
              {{ card.label }}
            </div>
          </div>
          <div class="text-sm text-muted my-1">
            {{ card.description }}
          </div>
          <UBadge color="neutral" class="self-start mt-2 capitalize">
            {{ card.role }}
          </UBadge>
          <NuxtLink :href="card.to">
            <UButton
              class="mt-2 self-start"
              size="sm"
              trailing-icon="i-lucide-arrow-right"
            >
              Đăng ký
            </UButton>
          </NuxtLink>
        </div>
      </MUCard>
    </AnimatePresence>
  </div>
</template>
