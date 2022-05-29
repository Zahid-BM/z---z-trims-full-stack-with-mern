import axios from 'axios';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    console.log(user.photoURL)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const review = data;
        console.log(review)

        const url = 'http://localhost:5000/reviews';

        axios.post(url, review)
            .then(res => {
                const { data } = res;
                console.log(data)
                if (data.insertedId) {
                    toast('Success !!! Your review is added. Your review is now available on the homepage reviews section.');
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
                                <Form.Label><small className='text-success'>Your Photo</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="text"
                                    value={user && user?.photoURL}
                                    readOnly={user?.photoURL}
                                    {...register("img")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-success'>Your Ratting</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="text"
                                    placeholder='Your ratings out of 5'
                                    {...register("ratings",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Order Quantity is required'
                                            },
                                            min: {
                                                value: 4,
                                                message: 'At least rate 4 out of five'
                                            },
                                            max: {
                                                value: 5,
                                                message: 'You can not rate more than 5'
                                            },
                                        }
                                    )}
                                />
                                <Form.Label>
                                    <small className='text-danger mt-2'>
                                        {errors.ratings?.type === 'required' && errors?.ratings?.message}
                                        {errors.ratings?.type === 'min' && errors?.ratings?.message}
                                        {errors.ratings?.type === 'max' && errors?.ratings?.message}
                                    </small>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><small className='text-success'>Your Review</small></Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    required
                                    type="text"
                                    className='text-center'
                                    {...register("review")}
                                />
                            </Form.Group>
                            <input className='text-center d-block mt-4 w-50 mx-auto base-bg border-0 rounded-3 py-2 text-white' value={'Add Review'} type="Submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddReview;