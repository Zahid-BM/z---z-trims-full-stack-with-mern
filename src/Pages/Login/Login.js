import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/Loading/SocialLogin/SocialLogin';
import login from '../../images/register.png';
import { toast } from 'react-toastify';



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


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('login success. You can now see the private/protected routes.');
        };
    }, [user, token, location, navigate, from]);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);


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
                toast.success('Sent email for password reset');
            }
        }
    };
    const handleAdminLogin = () => {
        toast(`Email : bmzahid.programmer@gmail.com Password : 123456`)
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={8}>
                        <img className='img-fluid rounded-3 h-100' src={login} alt="" />
                    </Col>
                    <Col className='shadow p-5 bg-light' lg={4}>
                        <h2 className='text-center text-success'>Login</h2>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We will ensure your email address privacy.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p className='text-danger my-2'>{error?.message || resetPassError?.message}</p>
                            <p className='my-3'><small>Forget password ?</small><Button onClick={handleResetPass} className='text-decoration-none' variant="link">Reset password.</Button> </p>
                            <Button className='d-block w-100 common-btn border-0 hover1' type="submit">
                                Login
                            </Button>

                            <Button onClick={handleAdminLogin} variant='outline-success' className='d-block mt-3 mx-auto'>Login as Admin ?</Button>
                        </Form>
                        <p className='my-4'><small>New to Z&Z Trims ?</small> <Link to='/register' className='text-decoration-none'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Login;