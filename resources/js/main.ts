import { createPinia } from "pinia";
import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// import './../scss/app.scss'
import './bootstrap';

import App from './App.vue'

import router from './router'

createApp(App)
.use(router)
.use(createPinia())
.use(Quasar, { plugins: {} })
.mount('#app')