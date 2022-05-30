import axios from 'axios';
import { useEffect, useState } from 'react';

const useReviews = () => {


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get('http://localhost:5000/reviews');
            setReviews(data);
        }
        getReviews();
    }, [])

    return [reviews, setReviews]
};

export default useReviews;