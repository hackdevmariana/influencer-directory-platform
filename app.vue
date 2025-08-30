<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// En lugar de @vueuse/head, usamos los composables nativos de Nuxt
useHead({
  title: 'Influencer Directory Platform',
  meta: [
    { name: 'description', content: 'Plataforma de directorio de influencers' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

// Para SEO más específico, usar useSeoMeta
useSeoMeta({
  title: 'Influencer Directory Platform',
  description: 'Plataforma de directorio de influencers',
  ogTitle: 'Influencer Directory Platform',
  ogDescription: 'Plataforma de directorio de influencers',
  twitterCard: 'summary_large_image'
})
</script>

<style>
/* Estilos globales */
</style>
