import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"

const Banner = ({bannerItems}) => {

    console.log(bannerItems[1])
    return (
        <Carousel onChange={onchange} transitionTime={1000} swipeable={true} autoPlay={true} interval={1000} infiniteLoop={true} axis={'vertical'}  className=''>
            
                {
                    bannerItems?.map(item =>
                        <div class="w-full bg-cover bg-center h-[32rem]" style={{backgroundImage: `url(${item})`}}>
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Welcome to Our <span class="underline text-blue-00">Shop</span></h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>
                        // <div className='overflow-hidden w-full aspect-video bg-red-400 cursor-pointer relative group opacity-90 h-[600px]'>
                            
                        // <img
                        //     alt=""
                        //     className="w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"  src={item}
                        // />
                        // <div
                        //     className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-white flex items-end"
                        // >
                        //     <div>
                        //         <div
                        //             className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                        //         >
                        //             <h1 className="font-bold">Jessie Watsica</h1>
        
                        //             <p className="opacity-60 text-sm ">
                        //                 Lorem ipsum dolor sit amet, consectetur adipisicing
                        //                 elit. Distinctio dolores error iure, perferendis
                        //                 sequi totam. Ad aliquam aperiam atque deleniti dolor
                        //                 dolorem enim esse et in, inventore itaque, pariatur
                        //                 reprehenderit.
                        //             </p>
                        //         </div>
                        //     </div>
                        // </div>
                        // </div>
                    )
                }

                        
            </Carousel>
    );
};

export default Banner;