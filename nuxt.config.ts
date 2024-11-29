// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-25",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/seo"],

  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
  },

  icon: {
    serverBundle: {
      collections: ["heroicons", "fa6-brands", "bx-bxs"],
    },
  },

  site: {
    url: process.env.SITE_URL || "https://ket-family-support-service.vercel.app",
    name: "Ket Family Support Service",
    description: "KET Family Support Service provides comprehensive NDIS support at no cost, ensuring every person with disability has access to the care and services they deserve.",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },

  future: {
    compatibilityVersion: 4,
  },
});
