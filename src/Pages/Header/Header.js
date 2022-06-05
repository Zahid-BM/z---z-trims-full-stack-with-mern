import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';


const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth);
        navigate('/home')
        toast.warning('You Logged out. Please login to visit protected page.');
    };


    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant='dark' className='base-bg' sticky='top'>
                <Container fluid>
                    <Navbar.Brand className='fw-bold fs-3 fst-italic mb-0' style={{ fontFamily: 'Lobstar' }} as={Link} to="/">
                        <div className='h-50'>
                            <img className='me-2 mb-0' src={logo} alt="" />

                            <span className='text-success'>Z</span><span className='text-warning'>&</span><span className='text-success'>Z</span> <br />
                            <span className='fs-6'><span className='text-warning'>Trims</span> <span className='text-success'>Manufacturer</span></span>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/home'>
                                <NavLink>Home</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/blogs'>
                                <NavLink>Blogs</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/portfolio'>
                                <NavLink>My Portfolio</NavLink>
                            </LinkContainer>
                        </Nav>
                        <Nav>

                            {/* conditional rendering */}
                            {
                                user && <>

                                    <LinkContainer to='/dashboard'>
                                        <NavLink>Dashboard</NavLink>
                                    </LinkContainer>
                                </>
                            }

                            {
                                user ?
                                    <>
                                        <Button onClick={handleLogout} className='text-decoration-none' variant="outline-warning">Logout</Button>
                                        <p className='my-auto text-warning ms-2 fw-bold'>{user?.displayName}</p>
                                    </>

                                    : <LinkContainer to='/login'>
                                        <NavLink><Button variant='outline-light'>Login</Button></NavLink>
                                    </LinkContainer>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;