import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import usePurchaseItem from '../../hooks/usePurchaseItem';

const Purchase = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0);
    const [purchaseItem] = usePurchaseItem(id, counter);
    console.log(purchaseItem);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card className='h-100 shadow bg-light' /* style={{width: '18rem'}} */>
                            <Card.Img className='fluid' variant="top" src={purchaseItem.img} />
                            <Card.Body className='p-4 d-flex flex-column base-bg'>
                                <Card.Title className='text-success text-center fs-3'>{purchaseItem.name}</Card.Title>
                                <ul className="list-group list-group-flush  ">
                                    <li className="list-group-item mb-3 base-bg text-center rounded "><b className='text-warning'>Price :</b>   <span className='text-white fw-bolder'>$ {purchaseItem.price}</span> <span className='fw-bolder text-warning'>/pcs</span></li>
                                    <li className="list-group-item mb-3 base-bg text-center rounded "><b className='text-warning'>Available Quantity :</b>   <span className='text-white fw-bolder'>{purchaseItem.quantity}</span> <span className='fw-bolder text-warning'>pcs</span></li>
                                    <li className="list-group-item mb-3 base-bg text-center rounded "><b className='text-warning'>Minimum Order Quantity :</b>   <span className='text-white fw-bolder'>{purchaseItem.moq} </span> <span className='fw-bolder text-warning'>pcs</span></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Purchase;