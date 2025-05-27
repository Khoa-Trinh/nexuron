<script lang="ts" setup>
import { UCard } from "#components";
import { motion } from "motion-v";
import { ofetch } from "ofetch";

type GitCommit = {
  sha: string;
  html_url: string;
  commit: {
    author: { name: string; date: string };
    message: string;
  };
  author: { avatar_url: string } | null;
};

const MUCard = motion.create(UCard);

const {
  data: commits,
  pending,
  error,
} = await useAsyncData(
  "nexuron-commits",
  () =>
    ofetch<GitCommit[]>(
      "https://api.github.com/repos/Khoa-Trinh/nexuron/commits",
      {
        query: { per_page: 10 },
        headers: { Accept: "application/vnd.github+json" },
      }
    ),
  {
    server: true,
    default: () => [],
  }
);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
</script>

<template>
  <section class="flex-1 flex flex-col items-center gap-16 py-16">
    <h2 class="text-3xl font-semibold flex items-center gap-2">
      <UIcon name="i-lucide-git-commit" class="h-7 w-7 text-primary" />
      Nhật kí thay đổi
    </h2>

    <div v-if="pending" class="flex items-center gap-2 text-muted-foreground">
      <UProgress indeterminate size="xs" class="flex-1" />
      <span>Fetching changelog…</span>
    </div>

    <div v-else-if="error" class="text-danger">{{ error.message }}</div>

    <motion.div
      v-else
      :variants="animationsGrid().container"
      initial="hidden"
      animate="show"
      class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full"
    >
      <MUCard
        v-for="commit in commits"
        :key="commit.sha"
        :variants="animationsGrid().children"
        :ui="{
          body: 'flex flex-col gap-4 h-full',
        }"
        class="transition-transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="flex items-center gap-3">
          <img
            :src="
              commit.author?.avatar_url || 'https://gravatar.com/avatar?d=mp'
            "
            :alt="commit.commit.author.name"
            class="h-10 w-10 rounded-full object-cover"
          >
          <div class="flex flex-col">
            <p class="font-medium leading-tight">
              {{ commit.commit.author.name }}
            </p>
            <p class="text-xs text-muted-foreground leading-tight">
              {{ formatDate(commit.commit.author.date) }}
            </p>
          </div>
        </div>

        <p class="flex-1 text-sm">
          {{ commit.commit.message.split("\\n")[0] }}
        </p>

        <div class="flex items-center justify-between text-xs">
          <code class="bg-muted/20 rounded-md px-2 py-1 font-mono select-all">
            {{ commit.sha.slice(0, 7) }}
          </code>
          <a
            :href="commit.html_url"
            target="_blank"
            rel="noopener"
            class="text-primary hover:underline"
          >
            View →
          </a>
        </div>
      </MUCard>
    </motion.div>
  </section>
</template>
