import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2';
import UseAuth from '../../../Hooks/UseAuth';
const full = <FontAwesomeIcon icon={faStar} />
const ementy = <FontAwesomeIcon icon={Star} />

const Order = () => {
    const [pd, setPd] = useState({})
    const { id } = useParams()
    const { user} = UseAuth()
    const history = useHistory()

console.log(pd);
    const { register, handleSubmit, reset } = useForm(); // initialize the hook
    useEffect(() => {
        fetch(`http://localhost:5000/furnitures/${id}`).then(res => res.json()).then(dataProduct => setPd(dataProduct))
    }, [])
    const onSubmit = (data) => {
        const success = () => {
            Swal.fire(
                'Congratulations ',
                'You have successfully Add ',
                'success'
            )
        }
        data.status = "Pending";
        data.email= user.email
        data.title= pd?.name   
        data.price= pd?.price   
        data.displayName= pd?.displayName    
            axios.post("http://localhost:5000/order", data)
            .then(response => {
                if (response.data.insertedId) {
                    success()
                    reset()
                    history.push("/pay")
                }
            })
        
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="product-information mt-5">
                    <img className=" img-fluid w-100" src={pd.img} alt="" />

                    <h1>{ }</h1>
                    <h3>{pd?.title}  </h3>
                    <p className="d-flex  justify-content-between">  <span>Price: {pd.price}</span><Rating emptySymbol={ementy} fullSymbol={full} initialRating={pd?.star} readonly stop="5" /></p>
                    <h3>Product Overview </h3>
                    <p>{pd?.detail}</p>
                    </div>
                </Col>
                <Col>
                    <div className="form">
                        <h1>Order Now</h1>
                        <p></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input value={user?.displayName}  {...register("name")} />
                            <input className="my-3" value={user?.email}  {...register("email")} />
                            <input type="number" placeholder="Phone Number" {...register("number")} />
                            <input className="my-3" placeholder="Address" {...register("address")} />
                            <input className="my-3" type="submit" value="Order Now" />
                        </form>
                    </div>

            </Col>
            </Row>
        
    </Container >
    );
};

export default Order;