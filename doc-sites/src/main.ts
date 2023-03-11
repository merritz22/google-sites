import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faShare,faReply,faHouseLaptop,faGear,faEllipsisV,faFont,
    faWandMagicSparkles,faLink,faImage,faUpDown,faList,faTableColumns,
    faMinus,faUsers,faLocationDot,faFileLines,faChartSimple
    } from '@fortawesome/free-solid-svg-icons'
import {faSquare,faSquarePlus,faCalendar} from '@fortawesome/free-regular-svg-icons'

library.add(faShare,faReply,faHouseLaptop,faGear,faEllipsisV,faFont,
    faImage,faWandMagicSparkles,faLink,faUpDown,faList,faTableColumns,
    faSquare,faMinus,faUsers,faSquarePlus,faCalendar,faLocationDot,faFileLines,
    faChartSimple
    )


const app = createApp(App)

app.use(router)

app.component('fa', FontAwesomeIcon)

app.mount('#app')
