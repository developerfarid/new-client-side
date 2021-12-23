import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


import "./Header.css"

const Headers = () => {
const {user, logOut}= UseAuth()
    return (
        <Navbar className=" my-navber bg-black" expand="lg">
        <Container>
            <NavLink style={{ fontFamily: "Oswald" }} className="text-decoration-none fs-1 text-info" to="/home">Furniture BD </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/home">Home</NavLink>
                    
                    <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/productAll">More Product</NavLink>
                    
                    {user.email &&<NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/admin">DeshBoard</NavLink>}
                    {user?.email ? <button activeStyle={{ color: "#e6d011", textDecoration: "underline", }} className="my-link border-0 bg-transparent" onClick={logOut}>Logout</button> : <NavLink activeStyle={{ color: "#e6d011", }} className="my-link" to="/login">Login</NavLink>}
                </Nav>
                {user.email && <Navbar.Text className="fw-bold fs-5 text-info">
                    Signed in as: <span>{user?.displayName}</span>
                </Navbar.Text>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Headers;