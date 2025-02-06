import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import HomePage from './components/pages/home/HomePage.js'
const AuthAppLazy = lazy(() => import('./components/auth/AuthApp.js'))
const DashboardPageLazy = lazy(() => import('./components/pages/dashboard/DashboardPage.js'))

// CSS
import './app.css'

// Função para montagem do componente
const mount = (element) => {
    const NotFound = () => {
        return (
            <div className="container text-center p-3">
                <p className="h2">404 - Página não encontrada</p>
            </div>
        )
    }

    ReactDOM.createRoot(element).render(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthAppLazy />} />
                <Route path="/dashboard" element={<DashboardPageLazy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

mount(document.querySelector('#sandbox-container-root'))

export { mount }