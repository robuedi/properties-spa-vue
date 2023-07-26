import { createPinia } from "pinia";
import { createApp } from 'vue'

// Normalize css... because we need to make it normal first
import 'normalize.css';

//Prime Vue UI
import PrimeVue from 'primevue/config';
// import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/themes/lara-light-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import './../scss/tailwind.scss'

//add any custom scss
import './../scss/app.scss'

//get the router
import router from './router'

//api
import './api'

import './bootstrap'


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
import SelectButton from 'primevue/selectbutton';
import InputNumber from 'primevue/inputnumber';

//custom 
import ErrorFeedback from '@/components/inputs/extras/ErrorFeedback.vue';
import BasicForm from '@/components/inputs/extras/BasicForm.vue';


createApp(App)
.use(router)
.use(createPinia())
.use(PrimeVue)
.use(ToastService)
.component('Button', Button)
.component('Avatar', Avatar)
.component('Menubar', Menubar)
.component('InputText', InputText)
.component('InputNumber', InputNumber)
.component('SplitButton', SplitButton)
.component('Card', Card)
.component('Password', Password)
.component('Divider', Divider)
.component('Listbox', Listbox)
.component('InlineMessage', InlineMessage)
.component('TabMenu', TabMenu)
.component('Textarea', Textarea)
.component('Dropdown', Dropdown)
.component('SelectButton', SelectButton)
.component('Toast', Toast)
.component('ErrorFeedback', ErrorFeedback)
.component('BasicForm', BasicForm)
.mount('#app')
