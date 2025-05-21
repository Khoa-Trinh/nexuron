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
        { name: "description", content: "The organization of the first generation Tin-LN i2427, uniting passionate, creative, and innovative technology enthusiasts." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:image", content: "/Nexuron-horizon.png" },

      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    allowedHosts: process.env.ALLOWED_HOSTS || "",
  },
});
