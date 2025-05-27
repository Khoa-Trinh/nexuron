<template>
  <div class="flex flex-col min-h-screen">
    <LayoutsHeader />
    <div
      class="flex-1 flex flex-col 2xl:w-[88rem] xl:w-6xl lg:w-4xl md:w-2xl sm:w-xl w-sm mx-auto transition-all duration-300 pt-15"
    >
      <slot />
    </div>
    <LazyLayoutsFooter hydrate-on-visible />
  </div>
</template>
