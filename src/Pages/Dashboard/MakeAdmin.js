import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useProfiles from '../../hooks/useProfiles';
import cancel from '../../images/cancel.png'

const MakeAdmin = () => {
    const [allProfiles, setAllProfiles] = useProfiles();


    const handleRemoveBtn = id => {
        const userConfirmation = window.confirm('Once delete then it can not be restored. Are you sure to delete this Item ?')
        if (userConfirmation) {
            const url = `http://localhost:5000/profiles/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount === 1) {
                        const remaining = allProfiles.filter(profile => profile?._id !== id);
                        setAllProfiles(remaining)
                        toast.success('User Profile removal success!!!')
                    }
                })
        }
    };
    return (
        <div>
            <Container>
                <div className='mt-3'>
                    <h2 className='text-center  display-5 fw-bold text-warning ms-2'>All Profiles : {allProfiles.length}</h2>
                    <p className="text-center text-secondary fw-bold">User can see all of the orders that done with this account only</p>

                    <Table responsive variant='secondary' className='text-center mt-4 rounded w-100 rounded-3'>
                        <thead>
                            <tr>

                                <th className='text-warning base-bg'>Number</th>
                                <th className='text-warning base-bg'>Email</th>
                                <th className='text-warning base-bg'>Name</th>
                                <th className='text-warning base-bg'>Make Admin</th>
                                <th className='text-warning base-bg'>Remove</th>

                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {
                                allProfiles.map((profile, index) => <tr key={profile?._id}>
                                    <td className='bg-secondary'><small>{index + 1}</small></td>
                                    <td className='bg-secondary'><small>{profile?.email}</small></td>
                                    <td className='bg-secondary'><small>{profile?.name}</small></td>
                                    <td className='bg-secondary'><Button className='base-bg text-white border-0 btn-sm'>Make Admin <img src={'payment'} alt="" /></Button></td>
                                    <td className='bg-secondary'><img className='cancel-btn' onClick={() => handleRemoveBtn(profile?._id)} src={cancel} alt="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>
    );
};

export default MakeAdmin;