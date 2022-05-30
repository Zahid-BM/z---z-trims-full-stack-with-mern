import axios from 'axios';
import { useEffect, useState } from 'react';

const useProfiles = () => {


    const [allProfiles, setAllProfiles] = useState([]);
    useEffect(() => {
        const getAllProfiles = async () => {
            const { data } = await axios.get('https://garments-accessories.herokuapp.com/profiles', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setAllProfiles(data);
        }
        getAllProfiles();
    }, [])

    return [allProfiles, setAllProfiles];
};

export default useProfiles;