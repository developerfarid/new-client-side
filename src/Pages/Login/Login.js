import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css';



const Login = () => {
    const [loginData, setLoginData]=useState({})
    const { user, sentResetPassByEmail, handleSubmit, googleSign } = UseAuth()
    const location = useLocation()
    const history = useHistory()
    const handleG = () => {
        googleSign(location,history)
            
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmitData = (e) => {
        e.preventDefault();
        handleSubmit(loginData.email, loginData.password, location, history)
    }
   

    return (
        <Container className="register py-5 mt-5">
            <Row data-aos="zoom-in" md={2} sm={1} className="container-form h-100">
                <Col>
                    <div className="form-container py-5">
                        <form onSubmit={handleSubmitData}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <button onClick={handleG} className="social"><FontAwesomeIcon icon={faGoogle} /></button>
                              
                            </div>
                            <span>or use your account</span>
                            <input name="email" onBlur={handleOnBlur} type="email" placeholder="Email" required />
                            <input name="password" onBlur={handleOnBlur} type="password" placeholder="Password" required />
                            <button className="submit w-100" onClick={sentResetPassByEmail}>Forgot your password?</button>
                            <input className="submit" type="submit" value="Sign In" />
                        </form>
                    </div>
                </Col>
                <Col>
                    <div className="overlay-container py-2">
                        <div className="overlay py-5">
                            <div className="overlay-panel">
                                <h1>Hello, {user.displayName ? user.displayName : "Sir"}</h1>
                                <p className="form-info">Enter your personal details and start journey with us</p>
                                <Link to="/register"><button className="ghost">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
