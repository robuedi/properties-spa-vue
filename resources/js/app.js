import { createPinia } from "pinia";
import { createApp } from 'vue'

//Quasar
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

//api
import './api';
import './../scss/app.scss'

import App from './App.vue'

import router from './router'

createApp(App)
.use(router)
.use(createPinia())
.use(Quasar, { 
    plugins: {},
    iconSet: quasarIconSet
})
.mount('#app')