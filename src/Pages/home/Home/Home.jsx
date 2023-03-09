import React from 'react';
import Categories from '../../../components/Categories';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    const items = [         "https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
    "https://i.ibb.co/7X2zfQr/cover12.jpg",
    "https://i.ibb.co/k64RPxb/pexels-tima-miroshnichenko-5213056.jpg",
    "https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg"

    ]
    //   ]
    return (
        <div>
            <div className="hero-section ">
            <div className='fixed bg-transparent right-0 left-0 top-0 z-50'>
            <Navbar></Navbar>
            </div>
            <Banner bannerItems={items}></Banner>
            </div>
            <Categories></Categories>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;