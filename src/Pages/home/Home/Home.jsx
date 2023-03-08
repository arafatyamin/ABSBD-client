import React from 'react';
import Card from '../../../components/Card';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import SwipperCarousel from '../Banner/SwipperCarousel';

const Home = () => {
    const items = [         {img:"https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg"},
        {img:"https://i.ibb.co/7X2zfQr/cover12.jpg"},
        {img:"https://i.ibb.co/k64RPxb/pexels-tima-miroshnichenko-5213056.jpg"},
        {img:"https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg"},

    ]
    // const dataForBackPacking = [
    //     {url:"https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg"},
    //     {url:"https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg"},
    //     {url:"https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg"},
    //     {url:"https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg"},
    //     {url:"https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg"},
    //     {url:"https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg"},
    //   ]
    return (
        <div>
            <div className="hero-section ">
            <div className='fixed bg-transparent right-0 left-0 top-0 z-50'>
            <Navbar></Navbar>
            </div>
            {/* <SwipperCarousel></SwipperCarousel> */}
            <Banner bannerItems={items}></Banner>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;