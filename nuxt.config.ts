// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
  app: {
    head: {
      title: 'Influencers directory',
      meta: [{ name: 'description', content: 'Influencers directory' }],
    },
  },
})
