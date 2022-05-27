import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import purchase from '../../images/purchase(2).png';


const SingleTrims = ({ singleTRims }) => {
    const { _id, name, price, description, moq, quantity, img } = singleTRims;
    const navigate = useNavigate();

    const navigateToPurchasePage = id => {
        navigate(`/purchase/${id}`)
    };
    return (
        <>
            <Col className='g-4 ' lg={4} >
                <Card className='h-100 shadow bg-light'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='mt-3 text-success'>{name}</Card.Title>
                        <Card.Subtitle className='text-warning my-3'> Price : $ {price} /pcs</Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h6 className='text-success'>Available Quantity : {quantity} pcs</h6>
                        <h6 className='text-success mb-4'>Minimum Order Quantity : {moq} pcs</h6>

                        {<div className='mt-auto' >
                            <Button onClick={() => navigateToPurchasePage(_id)} className='common-btn border-0 rounded-pill px-5 hover1 w-100 py-2'>Order Now<img className='ms-2' src={purchase} alt="" /></Button>
                        </div>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleTrims;