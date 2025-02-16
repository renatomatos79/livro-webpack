import Home from '@/components/pages/home/Home.vue'
import { createApp } from 'vue'

const mount = (element: Element) => {
    createApp(Home).mount(element)
}

console.log('mode: ', import.meta.env.MODE)

if (import.meta.env.MODE === 'development') {
    const devRoot = document.querySelector('#sandbox-dashboard-root')
    console.log('devRoot: ', devRoot)
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }