import React from 'react';
import appImage1 from '../../images/Appstore.svg';
import appImage2 from '../../images/playstore.svg';
import appImage3 from '../../images/facebook(1).png';
import appImage4 from '../../images/linkedin(1).png';
import appImage5 from '../../images/twitter(1).png';
import appImage6 from '../../images/logo.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
    

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>



            <footer className='base-bg mt-5 '>
                <Container fluid>
                    <Row>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center text-white py-5'>
                                <h5 className='text-black'>Download our Apps</h5>
                                <a target="_blank" href='https://www.apple.com/app-store/' rel="noreferrer" ><img className='m-2 hover2' src={appImage1} alt="" /></a>
                                <a target="_blank" href='https://play.google.com/store/apps' rel="noreferrer" ><img className='m-2 hover2' src={appImage2} alt="" /></a>
                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center text-black py-5'>
                                <h5 className='text-black'>Find us on</h5>
                                <img className='m-2 hover2' src={appImage3} alt="" />
                                <img className='m-2 hover2' src={appImage4} alt="" />
                                <img className='m-2 hover2' src={appImage5} alt="" />

                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center py-5'>
                                <h5 className='text-black'>Find us on</h5>
                                <img className='m-2 hover2' src={appImage3} alt="" />
                                <img className='m-2 hover2' src={appImage4} alt="" />
                                <img className='m-2 hover2' src={appImage5} alt="" />
                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center py-5'>
                                <h5 className='text-black'>Find us on</h5>
                                <img className='m-2 hover2' src={appImage3} alt="" />
                                <img className='m-2 hover2' src={appImage4} alt="" />
                                <img className='m-2 hover2' src={appImage5} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='d-md-flex justify-content-around'>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <h4><img src={appImage6} alt="" /><span style={{ fontFamily: 'Lobstar' }} className='text-warning fw-bold fst-italic'>Z&Z</span></h4>  <span className='fs-6'><span className='text-warning fw-bold'>Trims</span> <span className='text-success fw-bold'>Manufacturer</span></span> <br />
                        All right reserved &copy;{year}
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                        <Button className='text-decoration-none text-dark' variant="link">Our Global Office</Button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;