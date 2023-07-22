import { createPinia } from "pinia";
import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
// import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/themes/lara-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import router from './router'

//api
import './api'

import './bootstrap'

//app custom scss
import './../scss/app.scss'

import App from './App.vue'

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import SplitButton from 'primevue/splitbutton'
import Card from 'primevue/card'
import Password from 'primevue/password'
import Divider from 'primevue/Divider'
import Listbox from 'primevue/listbox'
import InlineMessage from 'primevue/inlinemessage'
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast'
import TabMenu from 'primevue/tabmenu';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';


createApp(App)
.use(router)
.use(createPinia())
.use(PrimeVue)
.use(ToastService)
.component('Button', Button)
.component('Avatar', Avatar)
.component('Menubar', Menubar)
.component('InputText', InputText)
.component('SplitButton', SplitButton)
.component('Card', Card)
.component('Password', Password)
.component('Divider', Divider)
.component('Listbox', Listbox)
.component('InlineMessage', InlineMessage)
.component('TabMenu', TabMenu)
.component('Textarea', Textarea)
.component('Dropdown', Dropdown)
.component('Toast', Toast)
.mount('#app')
