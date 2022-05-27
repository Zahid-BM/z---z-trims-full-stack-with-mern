import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import approval from '../../images/approved-bill.png';

const Banner = () => {
    return (
        <>
            <Container fluid className='my-5 shadow-lg bg-light pt-5'>
                <h1 className='text-center mt-4 fw-bold text-success'>New Items Nomination <img src={approval} alt="" /></h1>
                <p className='text-center text-warning'>Below items are now verified from buyers to go for bulk production</p>
                <Row >
                    <Col lg={8}>
                        <img className='w-100 rounded-3 h-100' src="https://img.freepik.com/free-vector/realistic-textile-texture-labels-set_1284-23444.jpg?w=740&t=st=1653681919~exp=1653682519~hmac=f10303f0667d56eafbf0b66f6429af32fd222d70b4b21aaf0ed61333ff4d90e3" alt="" />
                    </Col>
                    <Col className='mt-3' lg={4}>
                        <h1 className='fw-bolder display-5 '><span className='text-success'>2022</span> <span className='text-secondary'>Nomination</span></h1>
                        <p>We are glad to declare that we have been nominated in 2022 these Hangtag and Label items for H&M, Levis, Jack & Jones, Zara, Barshka and Pomton. We have already got the projection from buyers and booked for raw materials. Hopefully we will start production from next month and these items are going to be a regular items.</p>

                        <h4 className='text-center mt-5 text-success'>List of the new items</h4>

                        <ul className="list-group list-group-flush  ">
                            <li className="list-group-item mb-3 "><b>Hangtag-Hj100 :</b> Nominated for H&M Buyer. This item is echo friendly and 100% recyclable.</li>
                            <li className="list-group-item mb-3 "><b>Woven Main Label-SK223 :</b> Nominated for ZARA Buyer. This item is echo friendly and 100% recyclable.</li>
                            <li className="list-group-item mb-3 "><b>Discount Label-HD0023 :</b> Nominated for Levis Buyer. This item is echo friendly and 100% recyclable.</li>
                            <li className="list-group-item mb-3 "><b>Woven Sale Label-GD4001 :</b> Nominated for H&M Buyer. This item is echo friendly and 100% recyclable.</li>
                            <li className="list-group-item mb-3 "><b>Hard Price Tag-TG0023 :</b> Nominated for GAP Buyer. This item is echo friendly and 100% recyclable.</li>
                            <li className="list-group-item mb-3 "><b>Paper Tag-GH4102 :</b> Nominated for Berska Buyer. This item is echo friendly and 100% recyclable.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Banner;