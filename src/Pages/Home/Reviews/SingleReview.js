import React from 'react';
import { Col } from 'react-bootstrap';
import ratingImg from '../../../images/ratings.png';


const SingleReview = ({ singleReview }) => {
    const { name, email, review, ratings, img } = singleReview;
    return (

        <Col lg={6} className='g-5'>
            <div className="row h-100 g-0 border rounded">
                <div className="col-4">
                    <img src={img} className="w-100 h-100 rounded-start" alt="..." />
                </div>
                <div className="col-8 pt-4 ps-3 review-bg">
                    <h5 className="mb-0 text-success">{name}</h5>
                    <small>{email}</small>
                    <p className="mt-3">{review}</p>
                    <p className='text-success'>Ratings : {ratings} <img src={ratingImg} alt="" /></p>
                </div>
            </div>
        </Col>
    );
};

export default SingleReview;