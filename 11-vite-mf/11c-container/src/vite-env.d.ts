/// <reference types="vite/client" />
declare module 'auth/AuthApp' {
    function mount(
        element: Element,
        { defaultPath, email, password, onSignIn } :
        {
            defaultPath?: string, email: string, password: string,
            onSignIn: ({ email, password } : { email: string, password: string }) => void
        })
}