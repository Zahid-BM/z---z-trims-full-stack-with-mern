import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../../hooks/useReviews';
import Loading from '../../Shared/Loading/Loading';
import SingleReview from './SingleReview';
import userReviewImg from '../../../images/market-review.png';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <>
            <Container className='my-5 shadow-lg pb-5 bg-light'>
                <h1 className='text-center text-success fw-bold display-md-3 pt-5'>Customer's Reviews <img src={userReviewImg} alt="" /></h1>
                <h6 className='text-center text-warning mb-2'>See what our customers say about us</h6>
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