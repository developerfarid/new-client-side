import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Headers from '../../Share/Header/Header';




const Register = () => {
    const [loginData, setLoginData]=useState({})
    const location = useLocation();
    const history = useHistory();
  const {googleSign,createUser, error} = UseAuth()
    const handleGWP = () => {
        googleSign(location, history)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleCreate = (e) => {
        e.preventDefault();
        createUser(loginData.email, loginData.password, loginData.displayName, location, history)
    }
    return (
        <>

        <Container className="register pt-5 my-5">
            <Row data-aos="zoom-in" md={2} sm={1} className=" container-form h-100">
                <Col>
                    <div className="form-container py-5">

                        <form onSubmit={handleCreate}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <button onClick={handleGWP} className="social"><FontAwesomeIcon icon={faGoogle} /></button>
                            </div>
                            <span>or use your email for registration</span>
                            <input onBlur={handleOnBlur} name="displayName" type="text" placeholder="Name" />
                            <input onBlur={handleOnBlur} name="email" type="email" placeholder="Email" />
                            <input onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
                            <input type="submit" className="submit" value="Sign Up" />

                            <p className="text-danger">{error}</p>
                        </form>
                    </div>
                </Col>
                <Col>
                    <div className="overlay-container py-2">
                        <div className="overlay py-5">
                            <div className="overlay-panel">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <Link to='/login'>
                                    <button className="ghost">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            </>
    );
};
export default Register;