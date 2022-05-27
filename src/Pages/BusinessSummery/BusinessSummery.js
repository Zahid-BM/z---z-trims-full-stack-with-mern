import React from 'react';
import { Container } from 'react-bootstrap';
import productPhoto from '../../images/business(1).png';
import customers from '../../images/target-users.png';
import business from '../../images/business.png';
import trophy from '../../images/trophy.png';
import nomination from '../../images/nomination.png';

const BusinessSummery = () => {
    return (
        <>
            <Container className='my-5 pt-5 shadow-lg bg-light'>
                <h1 className='text-center text-success'>Business Summery <img src={business} alt="" /></h1>
                <h5 className='text-center text-success'>Our Business Summery at a glance below for your reference</h5>
                <div className='d-md-flex justify-content-around my-5 py-lg-5'>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={productPhoto} alt="" /></div>
                        <div className='fw-bolder display-3 text-secondary'>107</div>
                        <div className='text-success fs-2 fw-bold'>Products</div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={customers} alt="" /></div>
                        <div className='fw-bolder display-3 text-secondary'>800+</div>
                        <div className='text-success fs-2 fw-bold'>Customers</div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={trophy} alt="" /></div>
                        <div className='fw-bolder display-3 text-secondary'>130+</div>
                        <div className='text-success fs-2 fw-bold'>Awards</div>
                    </div>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <div><img src={nomination} alt="" /></div>
                        <div className='fw-bolder display-3 text-secondary'>700+</div>
                        <div className='text-success fs-2 fw-bold'>Nomination</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BusinessSummery;