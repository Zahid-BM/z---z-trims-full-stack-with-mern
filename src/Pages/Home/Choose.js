import React from 'react';
import { Container } from 'react-bootstrap';
import user from '../../images/user-question.png';
import support from '../../images/support-team.png';
import delivery from '../../images/delivery-boy.png';
import rapid from '../../images/rapid-change.png';

const Choose = () => {
    return (
        <>
            <Container className='mt-4' fluid>
                <h1 className='text-center fw-bolder text-info'>Why Choose us<img src={user} alt="" /> <img src={'business'} alt="" /></h1>
                <div className='d-md-flex justify-content-around'>

                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={support} alt="" /></div>
                        <div className='fw-bolder display-6 text-warning'>24 Hrs Support</div>
                        <div className='text-secondary fs-4 fw-bold'>We ensure relentless support</div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={delivery} alt="" /></div>
                        <div className='fw-bolder display-6 text-warning'>Free Delivery</div>
                        <div className='text-secondary fs-4 fw-bold'>We deliver at free of cost</div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={rapid} alt="" /></div>
                        <div className='fw-bolder display-6 text-warning'>Rapid Production</div>
                        <div className='text-secondary fs-4 fw-bold'>We have the shortest lead-time</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Choose;