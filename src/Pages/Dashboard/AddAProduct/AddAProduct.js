import axios from 'axios';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import item from '../../../images/item.jpg';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const inputItem = data;
        const url = 'https://garments-accessories.herokuapp.com/trims';

        axios.post(url, inputItem)
            .then(res => {
                const { data } = res;
                console.log(data)
                if (data.insertedId) {
                    toast.success('Success !!! You have added a new item .');
                    reset();
                }
            })
            .catch(error => {
                console.dir(error)
            })
    };
    return (
        <div>
            <Container className='my-5'>
                <h1 className='text-center fw-bold text-warning'>Add a Product </h1>
                <p className='text-center fw-bold text-secondary'>As an admin you have the privilege to add a new product into the product list</p>
                <Row>
                    <Col lg={7}>
                        <img className='w-100 h-100 rounded' src={item} alt="" />
                    </Col>
                    <Col lg={5}>
                        <form className='p-5 base-bg shadow rounded my-3' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-warning'>Add item form</h4>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Item Name</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    placeholder='Input item name'
                                    required
                                    {...register("name")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Unit Price</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    placeholder='Input item unit price'
                                    type='text'
                                    required
                                    {...register("price")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Item Description</small> </Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    className='text-center'
                                    type="text"
                                    placeholder='Input Item description'
                                    required
                                    {...register("img")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>Minimum Order Quantity</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="number"
                                    required
                                    placeholder='Input Minimum Order Quantity'
                                    {...register("moq")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><small className='text-warning'>Current Stock Quantity</small></Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    className='text-center'
                                    placeholder='Input current stock quantity'
                                    {...register("quantity")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><small className='text-warning'>Item Image URL</small></Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    className='text-center'
                                    placeholder='Input item image URL'
                                    {...register("img")}
                                />
                            </Form.Group>
                            <input className='text-center d-block mt-4 w-50 mx-auto bg-warning border-0 rounded-3 py-2 text-white' value={'Add Item'} type="Submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddAProduct;