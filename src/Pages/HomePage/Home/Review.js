import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'

const Review = ({ item }) => {
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={Star} />
    const { name, details, rating } = item
    return (
        <Col className="mb-4">
            <Card >

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <p><Rating initialRating={rating} fullSymbol={element} emptySymbol={element2} readonly /></p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;