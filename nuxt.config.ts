// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  build: {
    transpile: ['vuetify'],
  },
  security: {
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: true // Disables CSP hash support for styles in SSG mode (recommended)
    },
    sri: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'nonce-{{nonce}}'",
          "'strict-dynamic'",
        ]
      }
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
      "nuxt-security"
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})
