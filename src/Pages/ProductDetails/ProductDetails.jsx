import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Carousel } from 'react-responsive-carousel';
import "./ProductDetails.css"

const ProductDetails = () => {
    const items = [         "https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
    "https://i.ibb.co/7X2zfQr/cover12.jpg",
    "https://i.ibb.co/k64RPxb/pexels-tima-miroshnichenko-5213056.jpg",
    "https://i.ibb.co/x3f6SyJ/pexels-tima-miroshnichenko-5702311.jpg"

    ]
    return (
        <div>
            <Carousel onChange={onchange} transitionTime={1000} swipeable={true}  interval={1000} infiniteLoop={true} axis={'vertical'}  className='border-b'>

{
    items?.map(item =>
                    <div className='overflow-hidden w-full aspect-video bg-red-400 cursor-pointer relative group opacity-90 h-[400px]'>
                            
                        <img
                            alt=""
                            className="w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"  src={item}
                        />
                        </div>
    )
}

        
</Carousel>
<div className=''>
    <div className="bg-gray-100 flex flex-col lg:w-1/2">
        <p className="text-2xl">Price : 2.25 crore</p>
        <p className="text-xl">Location : Block D, Bashundhara R-A, Dhaka</p>
        <div className='flex'>
        <p className="text-xl">2 beds</p>
        <p className="text-xl">2 baths</p>
        <p className="text-xl">2,000 sqft</p>
        </div>
        <p className="text-xl">title : Offering You 2000 Sq Ft Flat For Sale In Bashundhara R-a</p>
        <p className="text-xl">details : Introducing you with one of the best properties vacant for your next living. This 2000  Square Feet apartment in Bashundhara R-A awaits to be your next home. This beautiful apartment has 3 beds and 3 baths. The correspondent apartment completed with a very strong and wonderful floor plan. The flat for sale provides the exact comfortable lifestyle that you have been looking for. Covers area as a whole the flat also has facilities that come along with this edifice. </p>
    </div>
</div>
        </div>
    );
};

export default ProductDetails;