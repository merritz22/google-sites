import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
