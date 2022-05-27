import React from 'react';
import { Container } from 'react-bootstrap';
import productPhoto from '../../images/business(1).png';
import customers from '../../images/target-users.png';

const BusinessSummery = () => {
    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center text-success'>20 Years of Successful Business</h1>
                <h5 className='text-center text-success'>Our Business Summery at a glance below for your reference</h5>
                <div className='d-md-flex justify-content-around my-5 py-lg-5'>
                    <div className='d-flex flex-column align-items-center'>
                        <div><img src={productPhoto} alt="" /></div>
                        <div className='fw-bolder display-3'>107</div>
                        <div className='text-success fs-2'>Products</div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div><img src={customers} alt="" /></div>
                        <div className='fw-bolder display-3'>107</div>
                        <div className='text-success fs-2'>Products</div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div><img src={productPhoto} alt="" /></div>
                        <div className='fw-bolder display-3'>107</div>
                        <div className='text-success fs-2'>Products</div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <div><img src={productPhoto} alt="" /></div>
                        <div className='fw-bolder display-3'>107</div>
                        <div className='text-success fs-2'>Products</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BusinessSummery;