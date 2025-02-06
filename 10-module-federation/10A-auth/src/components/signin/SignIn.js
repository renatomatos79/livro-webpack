import React from 'react'
import {FaUserLock} from 'react-icons/fa';
import {Link} from "react-router-dom";

const SignIn = (props) => {
    const [email, setEmail] = React.useState(props.email ?? '');
    const [password, setPassword] = React.useState(props.password ?? '');
    const { onSignIn } = props;
    const handleSignIn = (event) =>   {
        event.preventDefault();
        // aciona a callback props.onSignIn
        onSignIn({ email, password });
    }

    return (
        <div className="container mt-5 col-lg-3">
                <div className="text-center">
                    <FaUserLock size={20} />
                    <h4>Autenticação</h4>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input
                            type="text"
                            value={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            required={false}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            required={false}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 col-lg-12">
                        <button type="submit" className="btn btn-primary col-lg-12" onClick={handleSignIn}>ENTRAR</button>
                    </div>
                    <div className="mb-3 col-lg-12 text-end">
                        <Link to="/auth/signup" className="btn btn-link">Ainda não tenho uma conta</Link>
                    </div>
                </form>
                <blockquote className="blockquote text-center">
                    <p>Copyright © Renato Matos</p>
                </blockquote>
            </div>
    )
}

export default SignIn
