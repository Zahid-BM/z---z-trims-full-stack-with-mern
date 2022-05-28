import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchaseItem from '../../hooks/usePurchaseItem';

const Purchase = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0);
    const [purchaseItem] = usePurchaseItem(id, counter);
    const [user, error, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data)
        reset();
    };

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
                        <form className='p-5 bg-light shadow' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-success'>Order Form</h4>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label text-success"><small>Your Name</small></label>
                                <input
                                    readOnly
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    value={user?.displayName}
                                    aria-describedby="emailHelp" {...register("email")}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label"><small>Email address</small></label>
                                <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address'
                                            }
                                        })}
                                />

                                <div id="emailHelp" className="form-text text-danger">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <input className='btn btn-success' type="submit" value={'Order'} />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Purchase;