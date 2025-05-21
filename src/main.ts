import { createApp } from "vue";
import App from "./App.vue";
//import vuetify from "vite-plugin-vuetify";



import "vuetify/styles/main.css"
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
