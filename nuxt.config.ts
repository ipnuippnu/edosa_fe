import { fileURLToPath, URL } from 'node:url';
import path from 'path'

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
      'nuxt-primevue', '@pinia/nuxt', '@vueuse/nuxt'
  ],
  primevue: {
      options: { ripple: true },
      components: {
          // include: ['Button']
      }
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '~': fileURLToPath(new URL('.', import.meta.url)),
  },
  devtools: { enabled: true },
  nitro: {
    // preset: "cloudflare-pages"
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {

            if(id.match(new RegExp("^" + __dirname, "g")))
            {
                if(id.includes('node_modules')){
                  let split = id.toString().split('node_modules/')[1].split('/')

                  if(!split[0].match(/^(@|vue|nuxt|primevue)/)) return 'vendor'

                }

                else if(id.match(/\.vue$/)) return 'page'

            }

            return


            if(id.includes('node_modules')) return 'vendor'
            // if(id.match(new RegExp("^" + __dirname, "g"))) return 'app'
            return

            if(id.match(new RegExp("^" + __dirname, "g")) && !id.includes(".scss"))
            {
                if(id.includes('node_modules')){
                  let split = id.toString().split('node_modules/')[1].split('/')

                  if(split[0].match(/^(@vue|nuxt|prime)/)) return 'core'
                  // else if(split[0].match(/^primevue/)) return 'primevue'
                  else return 'core'
                }

                return 'core'

            }

            return 'core'
          }
        }
      }
    }
  },
})
