import React from 'react';
import { Col } from 'react-bootstrap';
import ratingImg from '../../../images/ratings.png';

const SingleReview = ({ singleReview }) => {
    const { name, email, review, ratings, img } = singleReview;
    return (

        <Col lg={6} className='g-5 '>
            <div className="row h-100 g-0 border rounded">
                <div className="col-4">
                    <img src={img} className="w-100 h-100 rounded-start" alt="..." />
                </div>
                <div className="col-8 pt-4 ps-3 bg-light">
                    <h5 className="mb-0">{name}</h5>
                    <small className=''>{email}</small>
                    <p className="mt-3">{review}</p>
                    <p>Ratings : {ratings} <img src={ratingImg} alt="" /></p>
                </div>
            </div>
        </Col>
    );
};

export default SingleReview;