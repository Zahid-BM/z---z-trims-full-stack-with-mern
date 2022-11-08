import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import profileImg from '../../images/profile.png';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const profile = data;
        console.log(data);
        const url = `https://zandz-trims.onrender.com/profile/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(profile => {
                toast.success('Profile Created !!!!');
                reset();
            })
    };


    return (
        <>
            <Container className='mt-3' fluid >
                <h1 className='text-center fw-bold text-warning'>My Profile</h1>
                <p className='text-center fw-bold text-secondary'>This is your profile. You can add your profile and update too</p>
                <Row>

                    <Col lg={7}>
                        <form className='p-5 bg-secondary shadow rounded my-2' onSubmit={handleSubmit(onSubmit)}>
                            <h4 className='text-center fw-bolder text-warning'>My Profile Add Form</h4>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>My Name</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.displayName}
                                    readOnly
                                    {...register("name")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>My Email</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    value={user?.email}
                                    readOnly
                                    {...register("email")}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>My Phone Number</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="number"
                                    placeholder='Input phone number'
                                    required
                                    {...register("phone")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>My LinkedIn Profile</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type='text'
                                    placeholder='Input your linkedin profile link'
                                    required
                                    {...register("linkedin")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><small className='text-warning'>My  Location</small> </Form.Label>
                                <Form.Control
                                    className='text-center'
                                    type="text"
                                    placeholder='Input your City/District name'
                                    required
                                    {...register("location")}
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><small className='text-warning'>My Educational Info</small></Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    required
                                    type="text"
                                    placeholder='Input your educational background'
                                    className='text-center'
                                    {...register("education")}
                                />
                            </Form.Group>
                            <input className='text-center d-block mt-4 w-50 mx-auto bg-warning border-0 rounded-3 py-2 text-white' value={'Add / Update Profile'} type="Submit" />


                        </form>
                    </Col>
                    <Col lg={5}>
                        <img className='w-100 h-100' src={profileImg} alt="" />
                    </Col>

                </Row>
            </Container>

        </>
    );
};

export default MyProfile;