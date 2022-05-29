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
                <h1 className='text-center fw-bold text-warning'>Add a Review about us</h1>
                <p className='text-center fw-bold text-success'>We would love to accept your feedback to serve even better</p>
                <Row>
                    <Col lg={7}>
                        <img className='w-100 h-100 rounded' src="https://img.freepik.com/free-photo/hand-touching-doing-mark-five-yellow-stars-black-background-best-customer-satisfaction-evaluation-good-quality-product-service_616485-33.jpg?w=740&t=st=1653830148~exp=1653830748~hmac=7d75f5a962a39812bc1d37d25492b405ddf75da4310606e5220abf79c03d6f38" alt="" />
                    </Col>
                    <Col lg={5}>
                        <form className='p-5 bg-secondary shadow rounded ' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-warning'>Review Form</h4>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Your Name</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.displayName}
                                    readOnly
                                    {...register("name")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Your Email</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.email}
                                    readOnly
                                    {...register("email")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Your Photo</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="text"
                                    value={user && user?.photoURL}
                                    placeholder={!user?.photoURL && 'Insert your photo url'}
                                    readOnly={user?.photoURL}
                                    required={!user?.photoURL}
                                    {...register("img")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Your Ratting</small> </Form.Label>
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
                                <Form.Label><small className='text-warning'>Your Review</small></Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    required
                                    type="text"
                                    className='text-center'
                                    {...register("review")}
                                />
                            </Form.Group>
                            <input className='text-center d-block mt-4 w-50 mx-auto bg-warning border-0 rounded-3 py-2 text-white' value={'Add Review'} type="Submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddReview;