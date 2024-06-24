import { fileURLToPath, URL } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          title: 'Sakai Vue',
          link: [
              {
                  id: 'theme-css',
                  rel: 'stylesheet',
                  type: 'text/css',
                  href: '/themes/aura-light-green/theme.css'
              }
          ]
      }
  },
  modules: [
      'nuxt-primevue'
  ],
  primevue: {
      options: { ripple: true },
      components: {
          exclude: ['Editor']
      }
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  css: [
    '@/assets/styles.scss',
  ],
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages"
  }
})
