import Home from './components/pages/home/Home.vue'
import { createApp } from 'vue'

const mount = (element) => {
    createApp(Home).mount(element)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#sandbox-dashboard-root')
    console.log('devRoot: ', devRoot)
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }