<template>
  <div
    class="fixed top-0 flex justify-between items-center h-15 w-full bg-default border-b border-muted px-7 gap-2 z-50"
  >
    <LazySharedLogo hydrate-on-interaction="mouseover" class="flex-1 flex items-center h-10 w-27" />
    <div class="flex-4">
      <LazyUNavigationMenu
        hydrate-on-media-query="(min-width: 767px)"
        :items="useConstantsItemsNavigation().value"
        :ui="{
          root: 'w-full justify-center hidden md:flex',
        }"
        highlight
        variant="link"
      />
    </div>
    <div class="flex-1 flex items-center justify-end">
      <LazyLayoutsHeaderSearch :hydrate-after="2000" />
      <LayoutsHeaderColorMode />
      <LazyLayoutsHeaderSlideover hydrate-on-media-query="(max-width: 768px)" />
    </div>
  </div>
</template>
