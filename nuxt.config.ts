// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-25',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
  },

  icon: {
    serverBundle: {
      collections: ['heroicons', 'fa6-brands']
    }
  },

  future: {
    compatibilityVersion: 4,
  },

})