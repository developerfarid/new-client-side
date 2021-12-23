import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    const registerAlart = () => {
        Swal.fire(
            'Congratulations!',
            ' Admin successfully Added',
            'success'
        )
    }
    const handleAdmin = (e) => {
        e.preventDefault()
        const user = {email}
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            "headers": {
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res => res.json()).then(data => {

            if (data.modifiedCount) {
                registerAlart()
            }
            
        })


    }
    const handleOnBlur = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
   }
    return (
        <Form onSubmit={handleAdmin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleOnBlur} className="w-100 d-block" type="email" placeholder="Enter email" />
                <button className="btn btn-outline-success" type="submit">Make Admin</button>
            </Form.Group>
        </Form>
    );
};

export default MakeAdmin;