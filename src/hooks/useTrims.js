import axios from 'axios';
import { useEffect, useState } from 'react';

const useTrims = () => {
    const [trims, setTrims] = useState([]);
    useEffect(() => {
        const getTrims = async () => {
            const { data } = await axios.get('https://garments-accessories.herokuapp.com/trims');
            setTrims(data);
        }
        getTrims();
    }, [])
    return [trims, setTrims];

};

export default useTrims;