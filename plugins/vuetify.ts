// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    console.log('vuetify plugin',app)
    const vuetify = createVuetify({
        theme: {
            cspNonce: "{{nonce}}",
        },
    })
    app.vueApp.use(vuetify)
})
