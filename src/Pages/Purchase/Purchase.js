import axios from 'axios';
import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePurchaseItem from '../../hooks/usePurchaseItem';

const Purchase = () => {
    const { id } = useParams();
    const [purchaseItem] = usePurchaseItem(id);
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const order = data;
        console.log(order)

        const url = 'https://garments-accessories.herokuapp.com/orders';

        axios.post(url, order)
            .then(res => {
                const { data } = res;
                console.log(data)
                if (data.insertedId) {
                    toast.success('Success !!! Your Order will be reviewed by an admin. For update visit My Orders page');
                    reset();
                }
            })
            .catch(error => {
                console.dir(error)
            })
    };

    return (

        <>
            <Container className='my-3'>
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
                        <form className='p-5 bg-light shadow' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-success'>Order Form</h4>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Your Name</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.displayName}
                                    readOnly
                                    {...register("name")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Your Email</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.email}
                                    readOnly
                                    {...register("email")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Your Phone</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="number"
                                    required
                                    {...register("phone")}
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><small className='text-success'>Your Address</small></Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    required
                                    type="text"
                                    className='text-center'
                                    {...register("address")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Product Name</small></Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={purchaseItem?.name}
                                    readOnly
                                    {...register("productName")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Order Quantity</small></Form.Label>
                                <Form.Control
                                    type="number"
                                    {...register("orderQuantity",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Order Quantity is required'
                                            },
                                            min: {
                                                value: purchaseItem?.moq,
                                                message: `Minimum Order Quantity is ${purchaseItem?.moq}`
                                            },
                                            max: {
                                                value: purchaseItem?.quantity,
                                                message: `Maximum Order Quantity is ${purchaseItem?.quantity}`
                                            },
                                        })}
                                />
                                <Form.Label>
                                    <small className='text-danger mt-2'>
                                        {errors.orderQuantity?.type === 'required' && errors?.orderQuantity?.message}
                                        {errors.orderQuantity?.type === 'min' && errors?.orderQuantity?.message}
                                        {errors.orderQuantity?.type === 'max' && errors?.orderQuantity?.message}
                                    </small>
                                </Form.Label>
                            </Form.Group>
                            <input disabled={errors.orderQuantity?.type === 'min' || errors.orderQuantity?.type === 'required' || errors.orderQuantity?.type === 'max'} className='text-center d-block mt-4 w-50 mx-auto base-bg border-0 rounded-3 py-2 text-white' value={'Order'} type="Submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Purchase;