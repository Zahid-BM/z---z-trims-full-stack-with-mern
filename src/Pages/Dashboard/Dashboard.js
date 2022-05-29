import React from 'react';
import { Col, Container, ListGroup, Row, Tab } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='base-bg ' lg={2}>
                    <ListGroup className='w-100 text-decoration-none vh-lg-100 sticky-top'>
                        <Link to={'/dashboard/myorders'}> <ListGroup.Item className='base-bg' variant='success' action>
                            My Orders
                        </ListGroup.Item></Link>
                        <Link to={'/dashboard/addreview'}> <ListGroup.Item className='base-bg' variant='success' action>
                            Add A review
                        </ListGroup.Item></Link>
                        <Link to={'/dashboard/myprofile'}> <ListGroup.Item className='base-bg' variant='success' action>
                            My Profile
                        </ListGroup.Item></Link>
                    </ListGroup>
                </Col>
                <Col lg={10}>
                    <Outlet></Outlet>
                </Col>
            </Row>

            <PageTitle title={'Dashboard'} />
        </Container>
    );
};

export default Dashboard;