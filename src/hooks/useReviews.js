import axios from 'axios';
import { useEffect, useState } from 'react';

const useReviews = () => {


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get('https://zandz-trims.onrender.com/reviews');
            setReviews(data);
        }
        getReviews();
    }, [])

    return [reviews, setReviews]
};

export default useReviews;