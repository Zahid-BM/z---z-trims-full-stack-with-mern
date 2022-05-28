import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/Loading/SocialLogin/SocialLogin';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetPassError] = useSendPasswordResetEmail(auth); /* clean code */
    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);

        if (user) {
            toast('login success');
        }
    };
    if (loading || sending) {
        return <Loading></Loading>;
    };
    const handleResetPass = async () => {
        const email = emailRef.current.value;
        const confirmation = window.confirm('To reset your password you must input your email address correctly. The email is correct?')
        if (confirmation) {
            if (!email) {
                return toast('Please input your email')
            }
            else {
                await sendPasswordResetEmail(email);
                toast('Sent email for password reset');
            }
        }
    };

    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center text-danger display-4 fw-bold'>Welcome to Fruits Valley Login Page <img src={'image10'} alt="" /></h1>
                <Row>
                    <Col lg={7}>
                        <img className='w-100 rounded-3 login-register-img' src={'image11'} alt="" />
                    </Col>
                    <Col className='my-auto shadow p-5' lg={5}>
                        <h2 className='text-center text-danger'>Login</h2>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p className='text-danger my-2'>{error?.message || resetPassError?.message}</p>
                            <p className='my-3'>Forget password ?<Button onClick={handleResetPass} className='text-decoration-none' variant="link">Reset password.</Button> </p>
                            <Button className='d-block w-75 mx-auto' variant="danger" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p className='my-4'>New to Fruits Warehouse ? <Link to='/register' className='text-success text-decoration-none'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer></ToastContainer>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Login;