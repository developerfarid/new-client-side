import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import Product from '../HomePage/Product/Product';

const MoreProduct = () => {
 const {productAll}=   UseAuth()
    return (
        <Container>
            
            <Row xs={1} md={2} lg={3} className="gy-4 mt-5">
                {
                    productAll.map(pd=> <Product key={pd._id}  pd={pd} />)
                    }
            </Row>
        </Container>
    );
};

export default MoreProduct;