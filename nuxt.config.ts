// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@sidebase/nuxt-auth',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  app: {
    head: {
      title: 'Influencers directory',
      meta: [{ name: 'description', content: 'Influencers directory' }],
    },
  },
  // Configuración para @nuxt/content
  content: {
    // Configuración básica para content
  }
})