import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"

const Banner = ({bannerItems}) => {

    console.log(bannerItems[1].img)
    return (
        <Carousel onChange={onchange} transitionTime={1000} swipeable={true} autoPlay={true} interval={1000} infiniteLoop={true} axis={'vertical'}  className='[thumbs-wrapper]:hidden'>
                {
                    bannerItems.map(item =>
                        <div className='overflow-hidden w-full aspect-video bg-red-400 cursor-pointer relative group opacity-90 h-[600px]'>
                            
                        <img
                            alt=""
                            className="w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"  src={item.img}
                        />
                        <div
                            className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-white flex items-end"
                        >
                            <div>
                                <div
                                    className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                                >
                                    <h1 className="font-bold">Jessie Watsica</h1>
        
                                    <p className="opacity-60 text-sm ">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Distinctio dolores error iure, perferendis
                                        sequi totam. Ad aliquam aperiam atque deleniti dolor
                                        dolorem enim esse et in, inventore itaque, pariatur
                                        reprehenderit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }

                        {/* <Carousel className='flex items-center justify-center w-full h-[400px]'>
                             
                            <div
                                className="overflow-hidden w-full h-full aspect-video bg-red-400 cursor-pointer relative group"
                            >
                                <div
                                    className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                                >
                                    <div>
                                        <div
                                            className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                                        >
                                            <div className="font-bold">Jessie Watsica</div>
                
                                            <div className="opacity-60 text-sm ">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Distinctio dolores error iure, perferendis
                                                sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                dolorem enim esse et in, inventore itaque, pariatur
                                                reprehenderit.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    alt=""
                                    className="w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                    src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg
                "
                                />
                            </div>
                            <div
                                className="overflow-hidden w-full h-full aspect-video bg-red-400 cursor-pointer relative group"
                            >
                                <div
                                    className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                                >
                                    <div>
                                        <div
                                            className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                                        >
                                            <div className="font-bold">Jessie Watsica</div>
                
                                            <div className="opacity-60 text-sm ">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Distinctio dolores error iure, perferendis
                                                sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                dolorem enim esse et in, inventore itaque, pariatur
                                                reprehenderit.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    alt=""
                                    className="w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                    src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg
                "
                                />
                            </div>
                        </Carousel> */}
            </Carousel>
    );
};

export default Banner;