import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row, ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import register from '../../images/8mm-Metal-Rivet-for-Denim-Jeans-Clothing-Accessories.webp';

const Register = () => {
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [condition, setCondition] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, profileError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    if (token) {
        navigate('/');
    };

    const handleCheckBox = event => {
        const agree = event.target.checked;
        setCondition(agree);
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        toast('Account creation done !!!!');
    };
    if (loading) {
        return <Loading></Loading>;
    };

    return (
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <img className='w-100 h-100' src={register} alt="" />
                </Col>
                <Col className=' container p-5 shadow rounded bg-light' lg={4}>
                    <h2 className='text-center text-success'>Register</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control ref={userNameRef} type="text" name='name' placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                Your email address will be secured. No worries .
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleCheckBox} type="checkbox" label="Agree with Z&Z Trims terms and condition ?" />
                        </Form.Group>
                        <p className='text-danger'>{error?.message || profileError?.message}</p>
                        {
                            condition ? <Button className='d-block w-100 common-btn border-0 hover1' type="submit">
                                Submit
                            </Button> : <Button disabled className='d-block w-100 common-btn border-0 hover1' type="submit">
                                Submit
                            </Button>
                        }
                    </Form>
                    <p className='my-4'>Already have an account ? <Link to='/login' className='text-warning text-decoration-none '> <span className='text-success'>Login</span></Link></p>
                    <ToastContainer />

                </Col>
            </Row>
        </Container>
    );
};


export default Register;