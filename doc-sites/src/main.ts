import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faShare,faReply,faHouseLaptop,faGear,faEllipsisV
    } from '@fortawesome/free-solid-svg-icons'

library.add(faShare,faReply,faHouseLaptop,faGear,faEllipsisV
    )


const app = createApp(App)

app.use(router)

app.component('fa', FontAwesomeIcon)

app.mount('#app')
