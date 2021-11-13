
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
    const { title, price, url, url2, rating, type,_id, des } = pd

    return (
        <Col className="my-3">
            <Card>
                <Card.Img  variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{ des}</p>
                    <p>{ price}</p>
                    <p><Rating initialRating={rating} fullSymbol={element} emptySymbol={element2} readonly /></p>
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