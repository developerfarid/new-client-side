
import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const Product = ({ pd }) => {
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={Star} />
    const { key,img,category,detail,brand,star,price,color,name, _id } = pd

    return (
        <Col className="my-3">
            <Card className='h-100'>
                <Card.Img style={{height:"250px"}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{ detail?.slice(0, 90)}</p>
                    <p className='d-flex justify-content-between'><span>Price: ${price}</span> <span>Category: {category }</span> </p>
                    <p className='d-flex justify-content-between'><span>Rating: <Rating initialRating={star} fullSymbol={element} emptySymbol={element2} readonly /></span><span>Brand: { brand}</span></p>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/product/${_id}`}>
                    <Button className="w-100">Buy Now</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;