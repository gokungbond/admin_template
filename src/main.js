import './assets/main.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBars, faPowerOff, faChevronLeft, faXmark, faCircle, faMagnifyingGlass, faAngleRight, faUser, faUsers, faPeopleGroup, faPersonWalkingArrowRight, faPersonCirclePlus, faPersonDigging, faPersonChalkboard, faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faPowerOff, faChevronLeft, faXmark, faCircle, faMagnifyingGlass, faAngleRight, faUser, faUsers, faPeopleGroup, faPersonWalkingArrowRight, faPersonCirclePlus, faPersonDigging, faPersonChalkboard, faPeopleCarryBox)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
