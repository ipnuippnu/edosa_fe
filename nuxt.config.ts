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
          exclude: ['Editor']
      }
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '~': fileURLToPath(new URL('.', import.meta.url)),
  },
  css: [
    '@/assets/styles.scss',
  ],
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages"
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {

            // console.log(id)

            // if(id.includes('node_modules')) {

            //   // return 'nodes';

            //   let split = id.toString().split('node_modules/')[1].split('/')
              
            //   return split[0]
            //   if(split[0] == 'primevue') {
            //     // if(split[1].match(/(datatable|calendar)/)) return split[1]

            //     // console.log(id)
            //     // return split[0]
            //     return split[1]
            //   }
              
            //   return 'vendor'
            // }

            // if(!id.match(/^C\:\/laragon\/www\/edo_fe\//))
            // {
            //   return 'app'
            // }
            // else
            // {
            //   return 'app2'
            // }

            // return 'app'

            // console.log()
            // return 

              // if (id.includes('node_modules')) {
                // console.log(id)
                // let vendor = id.toString().split('node_modules/')[1].split('/')[0].toString();

                // return vendor
              // }
          }
        }
      }
    }
  }
})
