import { createApp } from 'vue'
import App from './App.vue'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})

// ✅ Create and mount your Vue app
createApp(App).use(vuetify).mount('#app')
