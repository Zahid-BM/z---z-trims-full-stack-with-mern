import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import payment from '../../images/payment.png';
import cancel from '../../images/cancel.png';

const MyOrders = () => {
    // state for modals
    const [show, setShow] = useState(false);
    // functions for modals
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyOrders = async () => {
            const email = user?.email;
            const url = `https://garments-accessories.herokuapp.com/orders?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyOrders(data)
            }
            catch (err) {
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyOrders();
    }, [user, navigate]);


    const handleCancelBtn = id => {
        const userConfirmation = window.confirm('Once cancelled then it can not be retrieve. Are you sure to cancel this Item ?')
        if (userConfirmation) {
            const url = `https://garments-accessories.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const remaining = myOrders.filter(order => order?._id !== id);
                        setMyOrders(remaining)
                        toast.success('Order Cancelled')
                    }
                })
        }
    };
    return (
        <>
            <Container>
                <div className='mt-3'>
                    <h2 className='text-center  display-5 fw-bold text-warning ms-2'>My Orders : {myOrders.length} items</h2>
                    <p className="text-center text-secondary fw-bold">User can see all of the orders that done with this account only</p>

                    <Table responsive variant='secondary' className='text-center mt-4 rounded w-100 rounded-3'>
                        <thead>
                            <tr>

                                <th className='text-warning base-bg'>Number</th>
                                <th className='text-warning base-bg'>Email</th>
                                <th className='text-warning base-bg'>Item</th>
                                <th className='text-warning base-bg'>Quantity</th>
                                <th className='text-warning base-bg'>Payment</th>
                                <th className='text-warning base-bg'>Cancel</th>

                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {
                                myOrders.map((order, index) => <tr key={order?._id}>
                                    <td className='bg-secondary'><small>{index + 1}</small></td>
                                    <td className='bg-secondary'><small>{user?.email}</small></td>
                                    <td className='bg-secondary'><small>{order?.productName}</small></td>
                                    <td className='bg-secondary'><small>{order?.orderQuantity}</small></td>
                                    <td className='bg-secondary'>
                                    

                                        <Button onClick={handleShow} className='base-bg text-white border-0 btn-sm'>Pay <img src={payment} alt="" /></Button>

                                    </td>
                                    <td className='bg-secondary'><img className='cursor-selector' onClick={() => handleCancelBtn(order?._id)} src={cancel} alt="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>

                    <Modal
                        show={show}
                        onHide={handleClose}>
                        <Modal.Header className='bg-warning text-white' closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='base-bg text-white fw-bolder'>Do you want to pay now ?</Modal.Body>
                        <Modal.Footer className='bg-secondary'>
                            <Link to='/dashboard/payment'><Button variant="success" onClick={handleClose}>
                                Yes. Proceed
                            </Button> </Link>
                            <Button variant="danger" onClick={handleClose}>
                                No. Not now
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Container>

        </>
    );
};

export default MyOrders;