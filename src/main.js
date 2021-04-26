import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//global styles
import './assets/main.css'

// createApp(App).use(router).mount('#app')

//import firebase auth service
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})
