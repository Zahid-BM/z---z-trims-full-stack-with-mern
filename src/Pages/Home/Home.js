import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import Promotion from './Promotion';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Footer from './Footer';
import Reviews from './Reviews/Reviews';
import Trims from './Trims';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor='home-bg'></PageTitle>
            <Banner></Banner>
            <Trims></Trims>
            <Promotion></Promotion>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;