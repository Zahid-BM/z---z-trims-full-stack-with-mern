import React from 'react';
import { Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='base-bg' lg={2}>
                        <Navbar collapseOnSelect expand="lg" variant='dark'>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <ListGroup className='text-decoration-none vh-lg-100 my-3 mx-auto'>
                                    <Link to={'/dashboard/myorders'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        My Orders
                                    </ListGroup.Item></Link>
                                    <Link to={'/dashboard/addreview'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        Add A review
                                    </ListGroup.Item></Link>
                                    <Link to={'/dashboard/myprofile'}> <ListGroup.Item className='base-bg my-1 border-0 text-decoration-none shadow px-5 rounded text-center' variant='success' action>
                                        My Profile
                                    </ListGroup.Item></Link>
                                </ListGroup>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={10}>
                        <Outlet></Outlet>
                    </Col>
                </Row>

                <PageTitle title={'Dashboard'} />
            </Container>
        </>
    );
};

export default Dashboard;