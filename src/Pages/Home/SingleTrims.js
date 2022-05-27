import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../Shared/CommonButton';
import order1 from '../../images/order(1).png';


const SingleTrims = ({ singleTRims }) => {
    const { _id, name, price, description, moq, quantity, img } = singleTRims;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/trims/${id}`)
    }
    return (
        <>
            <Col className='g-4 ' lg={4} >
                <Card className='h-100 shadow'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='mt-3 text-success'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted my-3'> Price : $ {price} /pcs</Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h6 className='text-secondary'>Available Quantity : {quantity} pcs</h6>
                        <h6 className='text-secondary mb-4'>Minimum Order Quantity : {moq} pcs</h6>

                        {<div className='mt-auto' >
                            <CommonButton onClick={() => navigateToInventory(_id)} variant="danger" className=''>Order Now<img className='ms-3' src={order1} alt="" /></CommonButton>
                        </div>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleTrims;