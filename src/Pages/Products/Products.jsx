import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [Categories, setCategories] = useState([])
    const [Products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {console.log(data)
            setCategories(data)})
    },[Categories])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {console.log(data)
            setProducts(data)})
    },[Products])

    return (
                   
<section class="border-t bg-white dark:bg-gray-900">
    
        <div class="container px-6 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                   {
                    Categories.map(category => <ul key={category.id}>
                        <li className="text-black hover:bg-gray-100 w-full cursor-pointer">{category?.Name}</li>
                    </ul>)
                   } 
                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-gray-500 dark:text-gray-300">{Products?.length} Items</p>
                        <div class="flex items-center">
                            <p class="text-gray-500 dark:text-gray-300">Sort</p>
                            <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">low to high Price</option>
                                <option value="#">high to low Price</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {Products.map(product => <article key={product?._id} className="rounded-xl bg-white overflow-hidden shadow-lg hover:shadow-xl ">
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                            <img src={product?.demoPicture[0]} alt="Hotel_Photo" className='hover:transform hover:rotate-12 hover:scale-125 duration-300 bg-cover object-cover w-full rounded-md h-72 xl:h-80' />
                        </div>
                    <Link to={`/productDetails`}>
                        {/* seller information */}
                        <div className="mt-1 relative p-2">
                            <img src={product?.sellerInfo?.profile ? product?.sellerInfo?.profile:"https://listee.dreamguystech.com/html/assets/img/profiles/avatar-02.jpg"}  alt="" className="absolute w-8 h-8 rounded-full -top-6 left-5 z-999" />
                            <div className='flex justify-between' >
                                <p className="">{product?.propertyInformation?.type}</p>
                                <p className="">4.5*</p>
                            </div>
                            <h2 className="text-slate-700">{product?.title}</h2>
                            <p className="mt-1 text-sm text-slate-400">{product?.location?.address}</p>


                            <div className="mt-3 flex items-end justify-between">
                                <p className="text-lg font-bold text-blue-500">{product?.price}</p>

                                <Link to="" className="flex items-center space-x-1.5 rounded-lg bg-blue-600 px-4 py-1.5 text-white  hover:shadow-blue-800 hover:shadow-[inset_29rem_0_0_0] duration-[500ms,700ms] transition-[color,box-shadow] uppercase">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                    <button className="text-sm">Add to cart</button>
                                </Link>
                            </div>
                        </div>
                    </Link>
                </article>)}

                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Products;