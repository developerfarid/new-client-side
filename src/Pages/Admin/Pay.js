import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51K9my6A3r9kvBqXWpijvtiIEYvbX00mv6r7yPtPKiC0C8ne95prShGYjh8AgRgZA4eifXn12Jle0Xc955Ca4IlAo00ShN1nYui");

const Pay = () => {
    const [order, setOrder] = useState([])
    console.log(order);
    const { user } = UseAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`).then(res => res.json()).then(data => setOrder(data))
    }, [])


    let sum = order.reduce((re, now) => re + now.price, 0)
    console.log(sum);
 
    return (
      <div>
        <h1 className="my-5 text-center">Please pay Here </h1>
        <Container >
          {/* <Table responsive="xl" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>

              </tr>
            </thead>
            <tbody>

              {
                order?.map((item, i) => <>
                  <tr>
                    <td>{i + 1}</td>



                    <td>{item?.title}</td>

                    <td>{item?.price}</td>


                  </tr>
                </>)
              }

              <tr>
                <td></td>
                <td>Total</td>
                <td> {sum}</td>

              </tr>

            </tbody>
          </Table> */}
          {/* <Link className='text-decoration-none text-white fw-bold' to="/checkout"><button className='btn text-decoration-none btn-info m-auto d-block'>Please Pay Us ${sum}</button></Link> */}
          <Elements stripe={stripePromise}>
            <CheckoutForm price={sum} />
          </Elements>
        </Container>
      </div>
    );

};

export default Pay;