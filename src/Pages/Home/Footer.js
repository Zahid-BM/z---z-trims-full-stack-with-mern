import React, { useState } from 'react';
import appImage1 from '../../images/Appstore.svg';
import appImage2 from '../../images/playstore.svg';
import appImage3 from '../../images/facebook(1).png';
import appImage4 from '../../images/linkedin(1).png';
import appImage5 from '../../images/twitter(1).png';
import appImage6 from '../../images/logo.png';
import bangladesh from '../../images/bangladesh.png';
import united from '../../images/united.png';
import japan from '../../images/japan.png';
import levis from '../../images/levis.png';
import puma from '../../images/puma.png';
import nike from '../../images/nike.png';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    // state for footer modal
    const [show, setShow] = useState(false);
    // functions for footer modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <footer className='base-bg mt-5 '>
                <div className='d-md-flex justify-content-around'>

                    {/* modal declaration starts */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className='bg-success text-white' closeButton>
                            <Modal.Title>Welcome to Z&Z Footer Option</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='bg-secondary'>
                            <p className='bg-warning p-4 fs-5'>This option is under constructions. Very soon will be available. Thanks.</p>
                        </Modal.Body>
                        <Modal.Footer className='bg-secondary'>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* modal declaration ends */}
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Site Builders</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Programmers</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Licenses</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">map</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Suppliers</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Shipping</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Delivery</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Security</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-auto'>
                        <h4><img src={appImage6} alt="" /><span style={{ fontFamily: 'Lobstar' }} className='text-warning fw-bold fst-italic fs-2'>Z&Z</span></h4>  <span className='fs-6'><span className='text-warning fw-bold'>Trims</span> <span className='text-success fw-bold'>Manufacturer</span></span> <br />
                        <p className='fw-bold'>The Pioneer of Trims Suppliers</p>
                        All right reserved &copy;{year}
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Port Facilities</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Lead time</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Delivery Policy</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Wastage Report</Button>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Career</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Newsletter</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Employees</Button>
                        <Button onClick={handleShow} className='text-decoration-none text-dark' variant="link">Social Contribution</Button>
                    </div>
                </div>
                <Container fluid>
                    <Row>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center text-white py-5'>
                                <h5 className='text-black'>Download our Apps</h5>
                                <a target="_blank" href='https://www.apple.com/app-store/' rel="noreferrer" ><img className='m-2 hover1' src={appImage1} alt="" /></a>
                                <a target="_blank" href='https://play.google.com/store/apps' rel="noreferrer" ><img className='m-2 hover1' src={appImage2} alt="" /></a>
                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center text-black py-5'>
                                <h5 className='text-black'>Find us on</h5>
                                <img className='m-2 hover1 cursor-selector' src={appImage3} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={appImage4} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={appImage5} alt="" />

                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center py-5'>
                                <h5 className='text-black'>Global Branches</h5>
                                <img className='m-2 hover1 cursor-selector' src={bangladesh} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={united} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={japan} alt="" />
                            </div>
                        </Col>
                        <Col className='my-auto' lg={3}>
                            <div className='text-center py-5'>
                                <h5 className='text-black'>Official Partner</h5>
                                <img className='m-2 hover1 cursor-selector' src={nike} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={levis} alt="" />
                                <img className='m-2 hover1 cursor-selector' src={puma} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;