import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "motion-v/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },
  app: {
    head: {
      title: "Project Nexuron",
      meta: [
        {
          name: "description",
          content:
            "The organization of the first generation Tin-LN i2427, uniting passionate, creative, and innovative technology enthusiasts.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    allowedHosts: process.env.ALLOWED_HOSTS,
  },
});
