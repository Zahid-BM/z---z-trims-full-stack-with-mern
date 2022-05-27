import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import question from '../../images/question.png';


const Blogs = () => {
    return (
        <>
            <PageTitle title={'Blogs'} pageColor={'blogs-bg'}></PageTitle>
            <Container >
                <h1 className='text-center fw-bold text-success display-4 mt-5 mb-3'>The questions to be answered <img src={question} alt="" /></h1>
                <Row>
                    <Col className='my-auto py-5 my-auto ' lg={7}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className='base-bg text-white' eventKey="0">
                                <Accordion.Header >What are the difference between JavaScrips and Nodejs?</Accordion.Header>
                                <Accordion.Body>
                                    JavaScript basically a scripting language that is used for client side scripting at the primary level and built into java and HTML.On the other hand, Nodejs is a server side scripting programming language based on the google V8 Engine. Beside, javascript runs almost all browsers and nodejs is an environment to run javascript.

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="1">
                                <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                                <Accordion.Body>
                                    To answer this question we should know that, Nodejs is a run time environment/engine to run javascript programming language and mongodb is database engine and used for storing data. Now the answer is when we want to run javascript programming language to work server side or connect to database then we should use nodejs. On the other hand, if we want to handle data like update, delete or crud operation efficiently in the nosql database then we should use Mongodb.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="2">
                                <Accordion.Header>What are the difference between SQL and NoSQL database?</Accordion.Header>
                                <Accordion.Body>
                                    SQL stands for Structured Query Language and NoSQL stands for Not only Structured Query Language. SQL is a rational database and NoSQL is a non-rational language. SQL has static schema and NoSQL has a dynamic schema. SQL database is Vertically Scalable and Nosql  is Horizontally scalable. Most significantly for this Nosql is more lightweight and more famous.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="3">
                                <Accordion.Header>What are the difference between SQL and NoSQL database?</Accordion.Header>
                                <Accordion.Body>
                                    SQL stands for Structured Query Language and NoSQL stands for Not only Structured Query Language. SQL is a rational database and NoSQL is a non-rational language. SQL has static schema and NoSQL has a dynamic schema. SQL database is Vertically Scalable and Nosql  is Horizontally scalable. Most significantly for this Nosql is more lightweight and more famous.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='base-bg text-white' eventKey="4">
                                <Accordion.Header>What are the difference between SQL and NoSQL database?</Accordion.Header>
                                <Accordion.Body>
                                    SQL stands for Structured Query Language and NoSQL stands for Not only Structured Query Language. SQL is a rational database and NoSQL is a non-rational language. SQL has static schema and NoSQL has a dynamic schema. SQL database is Vertically Scalable and Nosql  is Horizontally scalable. Most significantly for this Nosql is more lightweight and more famous.
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