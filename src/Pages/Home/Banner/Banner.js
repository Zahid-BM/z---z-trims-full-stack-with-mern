import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-1.jpg';
import banner2 from '../../../images/Banner/banner-2.jpg';
import banner3 from '../../../images/Banner/banner-3.jpg';
import banner4 from '../../../images/Banner/banner-4.jpg';
import banner5 from '../../../images/Banner/banner-5.jpg';
import banner6 from '../../../images/Banner/banner-6.jpg';


const Banner = () => {
    return (


        <>
            <Carousel>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner1} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>Labels and Hangtag</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block'>
                                    We are nominated for Labels and Hangtag for 17 Brands. Per Day production capacity around 100000 pcs.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner2} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>PU Belts and Buckles</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block'>
                                    We are nominated for PU Belts and Buckles for 7 Brands.Per week production capacity around 12000 pcs..
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner3} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>Metal Rivets</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block'>
                                    We are nominated for PU Belts and Buckles for 11 Brands.Per week production capacity around 5000 pcs.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner4} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>Metal Zippers</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block'>
                                    We are nominated for Metal Zippers and Pullers for 22 Brands.Per day production capacity around 75000 pcs.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner5} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>Metal Button</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block'>
                                    We are nominated for Metal Shank and Snaps button for 21 Brands.Per week production capacity around 55000 pcs.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={banner6} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                                <Card.Title className=' display-2 text-white-50 d-none d-md-block'>Sewing Threads</Card.Title>
                                <Card.Text className='fs-6 text-white-50 d-none d-md-block '>
                                    We are nominated for sewing threads for 31 Brands. Per day production capacity around 7000 pcs.
                                </Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>

            </Carousel>
        </>


    );
};

export default Banner;