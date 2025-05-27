<template>
  <footer class="border-t border-muted/50 bg-background/70 backdrop-blur-md">
    <UContainer class="py-10 space-y-8">
      <USeparator icon="i-custom-logo" :ui="{ icon: 'size-24!' }" />

      <LayoutsFooterList :columns="constantsFooter()" />

      <div class="flex flex-col items-center gap-2 text-center">
        <div class="space-y-0.5">
          <p class="font-medium tracking-wide text-foreground">
            © 2025 MHPTeam
          </p>
          <p class="text-xs text-muted-foreground">Design by SnK</p>
        </div>

        <p class="text-xs">
          Publish under
          <NuxtLink
            to="https://github.com/Khoa-Trinh/nexuron/blob/master/LICENSE"
            target="_blank"
            rel="noopener"
          >
            <UButton variant="link" size="xs" class="inline-flex">
              GNU AGPL v3
            </UButton>
          </NuxtLink>
        </p>
      </div>
    </UContainer>
  </footer>
</template>
