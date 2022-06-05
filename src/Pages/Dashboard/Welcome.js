import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Welcome = () => {
    return (
        <>
            <Container fluid className='my-5'>
                <Row >
                    <Col lg={6}>
                        <img className='w-100 rounded-3 h-100' src="https://cdn.pixabay.com/photo/2021/05/12/19/57/graph-6249047_960_720.png" alt="" />
                    </Col>
                    <Col className='my-auto' lg={6}>
                        <h1 className='fw-bolder display-3 '><span className='text-warning'>Welcome to</span> <span className='text-success'>Dashboard</span></h1>
                        <p>An admin is a super user with having all the powers and access to the whole site. Normal user will see here only their orders and profile. Normal users can give a review here too.</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Welcome;