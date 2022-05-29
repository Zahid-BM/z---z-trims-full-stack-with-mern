import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/orders?email=${email}`;
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
        const userConfirmation = window.confirm('Once delete then it can not be restored. Are you sure to delete this Item ?')
        if (userConfirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const remaining = myOrders.filter(order => order?._id !== id);
                        setMyOrders(remaining)
                        toast('Order Cancelled')
                    }
                })
        }
    };
    return (
        <div>
            <Container>
                <div className=''>
                    <h2 className='text-center mb-4 display-4 fw-bold text-success'>My Orders {myOrders.length} <img className='ms-3' src={'image2'} alt="" /></h2>

                    <Table responsive variant='success' className='text-center mt-4 rounded w-100'>
                        <thead>
                            <tr>

                                <th className=''>Email</th>
                                <th className=''>Item</th>
                                <th className=''>Quantity</th>
                                <th className=''>Payment</th>
                                <th className=''>Cancel</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(order => <tr key={order?._id}>
                                    <td><small>{user?.email}</small></td>
                                    <td><small>{order?.productName}</small></td>
                                    <td><small>{order?.orderQuantity}</small></td>
                                    <td><Button className='base-bg text-white'>Pay Now</Button></td>
                                    <td><img onClick={() => handleCancelBtn(order?._id)} className='hover1 w-25' src={'image1'} alt="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>
    );
};

export default MyOrders;