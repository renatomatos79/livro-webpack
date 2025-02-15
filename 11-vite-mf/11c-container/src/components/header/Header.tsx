import React from 'react'
import {Link} from "react-router-dom";

type HeaderProps = {
    isLogin: boolean,
    onLoginButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { onLoginButtonClick } = props;

    const handleClick = () => {
        onLoginButtonClick()
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="btn btn-link">Webpack Module Federation</Link>
            <form className="form-inline">
                <button className="btn btn-outline-success" type="button" onClick={handleClick}>{ !props.isLogin ? 'Login' : 'Logout'}</button>
            </form>
        </nav>
    )
}

export default Header