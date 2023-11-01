import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import Toaster from "@meforma/vue-toaster";
import FieldErrorMessage from './components/global/FieldErrorMessage.vue'
import ConfirmationDialog from './components/global/ConfirmationDialog.vue'
import App from './App.vue'
import router from './router'

//import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"

const apiDomain = import.meta.env.VITE_API_DOMAIN

const app = createApp(App)

const serverBaseUrl = apiDomain

app.provide('axios', axios.create({
    baseURL: serverBaseUrl,
    headers: {
        'Content-type': 'application/json',
    },
}))

app.provide('serverBaseUrl', serverBaseUrl)

app.use(Toaster, {
    // Global/Default options
    position: 'top',
    timeout: 3000,
    pauseOnHover: true
})

app.provide('toast', app.config.globalProperties.$toast);

const cities = {
    '2267056': 'Lisboa',
    '2267094': 'Leiria',
    '2740636': 'Coimbra',
    '2735941': 'Porto',
    '2268337': 'Faro',

}

app.provide('cities', cities)


app.use(createPinia())
app.use(router)

app.component('FieldErrorMessage', FieldErrorMessage)
app.component('ConfirmationDialog', ConfirmationDialog)

app.mount('#app')