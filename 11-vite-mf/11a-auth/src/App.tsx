import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import './app.css'
import SignIn from './components/signin/SignIn.js'
import SignUp from './components/signup/SignUp.js'

type AuthRedirectProps = {
    defaultPath?: string
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ defaultPath }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (defaultPath) navigate(defaultPath, { replace: true })
    }, [defaultPath])
    return null
}

// Função para montagem do componente
const mount = (
    element: Element,
    { defaultPath, email, password, onSignIn } :
    { defaultPath?: string, email: string, password: string, onSignIn: ({ email, password } : { email: string, password: string }) => void } ) => {
    const NotFound = () => {
        return (
            <div className="container text-center p-3">
                <p className="h2">404 - Página não encontrada</p>
            </div>
        )
    }

    ReactDOM.createRoot(element).render(
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <AuthRedirect defaultPath={defaultPath} />
            <Routes>
                <Route path="/auth/signin" element={<SignIn email={email} password={password} onSignIn={onSignIn} />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

// so exec. este codigo para o ambiente de desenvolvimento
if (import.meta.env.MODE === 'development') {
    const root = document.querySelector('#sandbox-auth-root')
    console.log('#sandbox-auth-root: ', root)
    if (root) {
        mount(root, {
            email: 'renato.matos79@gmail.com',
            password: '123456',
            onSignIn: ({ email, password } : { email: string, password: string }) => {
                console.log('onSignIn: ', { email, password })
            }
        })
    }
}

export { mount }