import { createPinia } from "pinia";
import { createApp } from 'vue'

import router from './router'

//Quasar
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

//notifications
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//api
import './api';

//app custom scss
import './../scss/app.scss'

import App from './App.vue'

createApp(App)
.use(router)
.use(createPinia())
.use(Toast)
.use(Quasar, { 
    plugins: {},
    iconSet: quasarIconSet
})
.mount('#app')