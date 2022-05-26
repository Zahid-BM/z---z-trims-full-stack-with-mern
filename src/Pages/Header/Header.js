import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth);
        navigate('/home')
        toast('You Logged out. Please login to visit protected page.');
    };


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" sticky='top'>
                <Container fluid>
                    <Navbar.Brand className='fw-bolder fs-2 text-white' as={Link} to="/"> <img src={''} alt="" /> Z&Z Trims</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/home'>
                                <NavLink>Home</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/blogs'>
                                <NavLink>Blogs</NavLink>
                            </LinkContainer>
                            <LinkContainer to='/gallery'>
                                <NavLink>Gallery</NavLink>
                            </LinkContainer>

                        </Nav>
                        <Nav>

                            {/* conditional rendering */}
                            {
                                user && <>

                                    <LinkContainer to='/requesteditems'>
                                        <NavLink> Requested Items</NavLink>
                                    </LinkContainer>
                                    <LinkContainer to='/requestitem'>
                                        <NavLink> Request Item</NavLink>
                                    </LinkContainer>
                                    <LinkContainer to='/myitems'>
                                        <NavLink>My Items</NavLink>
                                    </LinkContainer>


                                </>
                            }

                            {
                                user ?
                                    <Button onClick={handleLogout} className='text-decoration-none' variant="secondary">Logout</Button>

                                    : <LinkContainer to='/login'>
                                        <NavLink>Login</NavLink>
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