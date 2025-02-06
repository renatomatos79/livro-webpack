import React, {useEffect, useRef} from 'react'
import { mount } from 'auth/AuthApp'
import { useNavigate } from "react-router-dom";

const AuthApp = () => {
    const navigate = useNavigate();
    const ref = useRef(null)
    useEffect(() => {
        console.log('ref.current: ', ref.current)
        if (ref.current) {
            mount(ref.current,{
                defaultPath: '/auth/signin',
                email: 'pedro@gmail.com',
                password: 'pedro@123',
                onSignIn: (email, password) => {
                    console.log('container.onSignIn: ', { email, password })
                    navigate('/dashboard')
                }
            })
        }
    })
    return <div ref={ref} />
}

export default AuthApp