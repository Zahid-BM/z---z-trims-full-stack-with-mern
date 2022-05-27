import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Trims from './Trims';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor='home-bg'></PageTitle>
            <Banner></Banner>
            <Trims></Trims>
            <BusinessSummery></BusinessSummery>

        </div>
    );
};

export default Home;