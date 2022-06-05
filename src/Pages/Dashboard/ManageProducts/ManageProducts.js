import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useTrims from '../../../hooks/useTrims';
import cancel from '../../../images/cancel.png';

const ManageProducts = () => {
    const [trims, setTrims] = useTrims();
    const handleDeleteBtn = id => {
        const userConfirmation = window.confirm('Once delete then it can not be retrieve. Are you sure to delete this Item ?')
        if (userConfirmation) {
            const url = `https://garments-accessories.herokuapp.com/trims/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const remaining = trims.filter(singleTrims => singleTrims?._id !== id);
                        setTrims(remaining)
                        toast.success('Order Cancelled')
                    }
                })
        }
    };
    return (
        <div>
            <Container>
                <div className='mt-3'>
                    <h2 className='text-center  display-5 fw-bold text-warning ms-2'>All Items : {trims?.length} items</h2>
                    <p className="text-center text-secondary fw-bold">As an Admin you have the privilege to manage the items</p>

                    <Table responsive variant='secondary' className='text-center mt-4 rounded w-100 rounded-3'>
                        <thead>
                            <tr>

                                <th className='text-warning base-bg'>Number</th>
                                <th className='text-warning base-bg'>Item Name</th>
                                <th className='text-warning base-bg'>Quantity</th>
                                <th className='text-warning base-bg'>Image</th>
                                <th className='text-warning base-bg'>Cancel</th>

                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {
                                trims.map((singleTrims, index) => <tr key={singleTrims?._id}>
                                    <td className='bg-secondary'><small>{index + 1}</small></td>
                                    <td className='bg-secondary'><small>{singleTrims?.name}</small></td>
                                    <td className='bg-secondary'><small>{singleTrims?.quantity}</small></td>
                                    <td className='bg-secondary'><img className='item-img' src={singleTrims?.img} alt="" /></td>
                                    <td className='bg-secondary'><img className='cursor-selector' onClick={() => handleDeleteBtn(singleTrims?._id)} src={cancel} alt="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default ManageProducts;