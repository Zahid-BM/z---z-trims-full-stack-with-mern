import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import question from '../../images/question.png';


const Blogs = () => {
    return (
        <>
            <PageTitle title={'Blogs'} pageColor={'blogs-bg'}></PageTitle>
            <Container className='bg-light rounded shadow-lg px-3 py-4 my-3' >
                <h1 className='text-center fw-bold text-success display-4 mt-5 mb-3'>The questions to be answered <img src={question} alt="" /></h1>
                <Row>
                    <Col className='my-auto py-5 my-auto ' lg={7}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className='base-bg text-white' eventKey="0">
                                <Accordion.Header >How will you improve the performance of a React Application ??</Accordion.Header>
                                <Accordion.Body>
                                    To improve React performance, we need to make sure that components receive only necessary props.It will let us control the CPU consumption and avoid over-rendering unnecessary features. Alongside, splitting data into components, image optimization, avoiding inline functions, calling data from multiple APIs etc.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="1">
                                <Accordion.Header>What are the different ways to manage a state in a React application ?</Accordion.Header>
                                <Accordion.Body>
                                    We know react uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. Means if a single change is made then react can easily catch and update that so faster. We can manage states in Global State, Local state, Server state and URL state mainly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="2">
                                <Accordion.Header>How does prototypical inheritance work ?</Accordion.Header>
                                <Accordion.Body>

                                    In easy words, prototypical inheritance means to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. This basically works one way binding. Now a days in modern JavaScript we use __proto__
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="3">
                                <Accordion.Header>Why you do not set the state directly in React.For example, if you have const[products, setProducts]= useState([]).Why you do not set products =[...]instead, you use the setProducts?</Accordion.Header>
                                <Accordion.Body>
                                    If we set products =[...] then it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value means empty array coz we set a default value as an empty array.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="4">
                                <Accordion.Header>What is a unit test? Why should you write unit tests?</Accordion.Header>
                                <Accordion.Body>
                                    In easy words, unit test is a software developing process by which a small part of an application is scrutinized for proper operation. Example: checking a function whether it is working or not. Unit testing is very necessary because that really prevents the complex bugs and error. Before deployment and publication unit testing ells us the bugs and where to improve. All developer should have a practice of unit testing code writing process.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='py-5' lg={5}>
                        <img className='w-100 rounded-3' src="https://cdn.pixabay.com/photo/2016/10/08/18/35/help-1724292_960_720.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blogs;