import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import Headers from '../../Share/Header/Header';
import Contact from '../Contact/Contact';
import './Home.css'
import Review from './Home/Review';
import Product from './Product/Product';
import image1 from '../../image/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg'
import image2 from '../../image/Types-of-wood-used-for-making-furniture-in-India-FB-1200x700-compressed.jpg'

const Home = () => {
    const [review, setReview] = useState([])
    const { product } = UseAuth()
    useEffect(() => {
        fetch("http://localhost:5000/review")
        .then(res => res.json())
    .then(data=> setReview(data))
    }, [])


    return (
        <div>
            <Carousel fade>
                <Carousel.Item className="car-effect" >
                    <img
                        className="carousel-img d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="car-middle" >
                        <h3 className="title-car">Sale products </h3>
                        <h1 className="title-carousel"> Camabeds Siller Fabric Sofa </h1>
                        <Button className="btn-info text-white fw-bold mt-4" > Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="car-effect" >
                    <img
                        className="carousel-img d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="car-middle" >
                        <h3 className="title-car">Sale products </h3>
                        <h1 className="title-carousel"> NDiva Green and Light Green Chair </h1>
                        <Button className="btn-info text-white fw-bold mt-4" > Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
            <Container>
            <h1 className="text-center mt-5">Our New Product</h1>
                <Row xs={1} md={2} lg={3}>
                    {
                        product.map(pd=> <Product key={pd._id}  pd={pd} />)
                    }
                </Row>
                <h1 className="text-center my-4">Review Section</h1>
                <Row  xs={1} md={2} lg={3} >
                   
                    {
                        review.map(item => <Review key={item._id} item={item} />)
                    }
                </Row>
            </Container>
            <Contact />
        </div>
    );
};

export default Home;