import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [Categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('servicesCategories.json')
        .then(res => res.json())
        .then(data => {console.log(data)
            setCategories(data)})
    },[])

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-[100px] z-9999 my-10 gap-2">
            {
                Categories.map(categorie => 
                    <div class="w-full  hover:shadow-lg flex flex-col justify-center items-center h-[100px] cursor-pointer" style={{backgroundImage:`url("https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80")`}}>
                <div class="text-center">
                    <p class="text-xl text-white hover:text-blue-600 font-bold mb-2">{categorie.Name}</p>
                    <p class="text-base text-gray-900 font-normal">10 post</p>
                </div>
            </div>)
            }
        </div>
    );
};

export default Categories;