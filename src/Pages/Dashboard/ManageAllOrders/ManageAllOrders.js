import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useOrders from '../../../hooks/useOrders';
import cancel from '../../../images/cancel.png';

const ManageAllOrders = () => {
    const [orders, setOrders] = useOrders();
    const handleCancelBtn = id => {
        const userConfirmation = window.confirm('Once delete then it can not be restored. Are you sure to delete this Item ?')
        if (userConfirmation) {
            const url = `https://garments-accessories.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const remaining = orders.filter(order => order?._id !== id);
                        setOrders(remaining)
                        toast.success('Order Cancelled')
                    }
                })
        }
    };
    return (
        <>
            <Container>
                <div className='mt-3'>
                    <h2 className='text-center  display-5 fw-bold text-warning ms-2'>All Orders : {orders.length} items</h2>
                    <p className="text-center text-secondary fw-bold">As an Admin you can see all the orders here that ordered by various users</p>

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
                                orders.map((order, index) => <tr key={order?._id}>
                                    <td className='bg-secondary'><small>{index + 1}</small></td>
                                    <td className='bg-secondary'><small>{order?.email}</small></td>
                                    <td className='bg-secondary'><small>{order?.productName}</small></td>
                                    <td className='bg-secondary'><small>{order?.orderQuantity}</small></td>
                                    <td className='bg-secondary'><Button className='base-bg text-white border-0 btn-sm'>Pending</Button></td>
                                    <td className='bg-secondary'><img className='cancel-btn' onClick={() => handleCancelBtn(order?._id)} src={cancel} alt="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>

        </>
    );
};

export default ManageAllOrders;