import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {

            const url = 'https://zandz-trims.onrender.com/allOrders';
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrders(data)
            }
            catch (err) {
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [navigate]);
    return [orders, setOrders];

};

export default useOrders;