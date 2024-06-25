import { fileURLToPath, URL } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          link: [
              {
                  id: 'theme-css',
                  rel: 'stylesheet',
                  type: 'text/css',
                  href: '/themes/aura-light-green/theme.css'
              },
              { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
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
