import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReviews from '../../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center text-success fw-bold display-md-3 pt-5'>Customer's Reviews <img src={''} alt="" /></h1>
                <h6 className='text-center text-success mb-5'>See what our customers say about us</h6>
                {reviews.length ?
                    <Row>
                 
                            {
                                reviews.map(singleReview => <SingleReview
                                    key={singleReview._id}
                                    singleReview={singleReview}
                                ></SingleReview>)
                            }
                      
                    </Row> :
                    <Loading></Loading>
                }
            </Container>

        </>
    );
};

export default Reviews;