import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor='home-bg'></PageTitle>
            <Banner></Banner>

        </div>
    );
};

export default Home;