import React, {useState} from 'react'
import Header from '../../header/Header.js'
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
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
            <div className="container text-center p-3">
                <p className="h2">Container - Home</p>
            </div>
        </>
    )
}

export default HomePage