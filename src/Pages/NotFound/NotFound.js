import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404.png';

const NotFound = () => {
    return (
        <Container>
            <div className='w-50 mx-auto'>
                <img className='w-100' src={img} alt="" />
            </div>
        </Container>
    );
};

export default NotFound;