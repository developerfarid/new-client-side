import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const AllEmail = () => {
    const [email, setEmail] = useState([])
    useEffect(() => {
        fetch("https://ghoulish-pumpkin-61403.herokuapp.com/newsLetter")
            .then(res => res.json())
            .then(data => setEmail(data))
    })
    return (
        <Container>
            <Row>
                <Col>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                email.map((item, i) => <tr>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AllEmail;