import React, {lazy, useState} from 'react'
import Header from '../../header/Header.js'
import { useNavigate } from 'react-router-dom'
const DashboardAppLazy = lazy(() => import('../../dashboard/DashboardApp.tsx'))

const DashboardPage: React.FC = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const handleOnLoginButtonClick = () => {
        if (!isLogin) {
            navigate('/auth')
        }
        setIsLogin(!isLogin)
    }

    return (
        <>
            <Header isLogin={isLogin} onLoginButtonClick={handleOnLoginButtonClick} />
            <DashboardAppLazy />
        </>
    )
}

export default DashboardPage