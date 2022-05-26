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
        toast('You Logged out. Please login to visit protected page.');
    };


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg='light' sticky='top'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3 fst-italic mb-0' style={{ fontFamily: 'Lobstar' }} as={Link} to="/">
                        <img className='me-2' src={logo} alt="" />
                        <span className='text-success'>Z</span><span className='text-warning'>&</span><span className='text-success'>Z</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/home'>
                                <NavLink><Button variant='light'><span className='text-secondary'>Home</span></Button></NavLink>
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
                                        <NavLink><Button variant='light'><span className='text-secondary'>Login</span></Button></NavLink>
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