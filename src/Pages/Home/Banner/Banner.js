import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-1.jpg';
import banner2 from '../../../images/Banner/banner-2.jpg';
import banner3 from '../../../images/Banner/banner-3.jpg';
import banner4 from '../../../images/Banner/banner-4.jpg';
import banner5 from '../../../images/Banner/banner-5.jpg';
import banner6 from '../../../images/Banner/banner-6.jpg';


const Banner = () => {
    // state for Top buyers modal
    const [show, setShow] = useState(false);
    // functions for Top buyers modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // state for monthly sell modal
    const [show1, setShow1] = useState(false);
    // functions for monthly sell modal
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner1} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>Labels and Hangtag</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block'>
                                    We are nominated for Labels and Hangtag for 17 Brands. Per Day production capacity around 100000 pcs.
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    {/* modal declaration starts */}
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header className='bg-warning' closeButton>
                                            <Modal.Title>Buyer's Nominations</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className='bg-secondary'>
                                            <ListGroup>
                                                <ListGroup.Item className='base-bg text-white text-center'>H&M</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>GAP</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>Levi's</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>M&S</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>Puma</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>Adidas</ListGroup.Item>
                                                <ListGroup.Item className='base-bg text-white text-center'>NIKE</ListGroup.Item>
                                            </ListGroup>
                                        </Modal.Body>
                                        <Modal.Footer className='bg-secondary'>
                                            <Button variant="danger" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* modal declaration ends */}

                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>


                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>

                                    {/* modal declaration starts */}
                                    <Modal show={show1} onHide={handleClose1}>
                                        <Modal.Header className='bg-success text-white' closeButton>
                                            <Modal.Title>Average Monthly Sell</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className='bg-secondary'>
                                            <p className='base-bg p-4 text-white fs-5'>Our average monthly sell of this item is over <b> 5 Million units</b> internationally and day by day is increasing.</p>
                                        </Modal.Body>
                                        <Modal.Footer className='bg-secondary'>
                                            <Button variant="danger" onClick={handleClose1}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* modal declaration ends */}

                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner2} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>PU Leather Belts and Buckles</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block'>
                                    We are nominated for PU Leather Belts and Buckles for 7 Brands.Per week production capacity around 12000 pcs..
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>
                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner3} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>Metal Rivets</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block'>
                                    We are nominated for Metal Rivets for 11 Brands.Per week production capacity around 5000 pcs.
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>
                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner4} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>Metal Zippers</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block'>
                                    We are nominated for Metal Zippers and Pullers for 22 Brands.Per day production capacity around 75000 pcs.
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>
                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner5} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>Metal Button</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block'>
                                    We are nominated for Metal Shank and Snaps button for 21 Brands.Per week production capacity around 55000 pcs.
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>
                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner6} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-sm-block'>Sewing Threads</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-sm-block '>
                                    We are nominated for sewing threads for 31 Brands. Per day production capacity around 7000 pcs.
                                </Card.Text>
                                <div className='d-none d-sm-block'>
                                    <Button onClick={handleShow} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='warning'>Our Top Buyers</Button>
                                    <Button onClick={handleShow1} className='rounded-pill px-5 py-2 opacity-75 m-3' variant='success'>Our Monthly Sell</Button>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>

            </Carousel>
        </>


    );
};

export default Banner;