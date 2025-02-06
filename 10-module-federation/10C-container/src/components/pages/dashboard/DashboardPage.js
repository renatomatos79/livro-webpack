import React, {lazy, useState} from 'react'
import Header from '../../header/Header.js'
const DashboardAppLazy = lazy(() => import('../../dashboard/DashboardApp.js'))

const DashboardPage = () => {
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