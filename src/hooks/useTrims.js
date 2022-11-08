import axios from 'axios';
import { useEffect, useState } from 'react';

const useTrims = () => {
    const [trims, setTrims] = useState([]);
    useEffect(() => {
        const getTrims = async () => {
            const { data } = await axios.get('https://zandz-trims.onrender.com/trims');
            setTrims(data);
        }
        getTrims();
    }, [])
    return [trims, setTrims];

};

export default useTrims;