import React from 'react'
import {FaUserPlus} from 'react-icons/fa';
import {Link} from "react-router-dom";

const SignUp: React.FC = () => {
    return (
        <div className="container mt-5 col-lg-6">
                <div className="text-center">
                    <FaUserPlus size={20} />
                    <h4>Registre-se</h4>
                </div>
                <form>
                    <div className='row mb-3'>
                        <div className="col-lg-6">
                            <label htmlFor="inputFirstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="inputFirstName" required={false}/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="inputLasttName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="inputLasttName" required={false}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="text" className="form-control" id="inputEmail" required={false}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" autoComplete="off" required={false}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputConfirmPassword" autoComplete="off" required={false}/>
                    </div>
                    <div className="mb-3 col-lg-12">
                        <button type="submit" className="btn btn-primary col-lg-12">CADASTRE-SE</button>
                    </div>
                    <div className="mb-3 col-lg-12 text-end">
                        <Link to="/auth/signin" className="btn btn-link">Já tenho uma conta</Link>
                    </div>
                </form>
                <blockquote className="blockquote text-center">
                    <p>Copyright © Renato Matos</p>
                </blockquote>
            </div>
    )
}

export default SignUp
