import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar/Navbar';

const DashboardRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-5'>
                <div className='col-span-1'>
                <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
         <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                     
                     <li>
                        <Link to="" class="text-base text-gray-900 font-normal flex items-center p-2  group border-b">
                           <svg class="w-6 h-6 text-gray-900  transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                           </svg>
                           <span class="ml-3">Dashboard</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/myorder" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">

                           <span class="ml-3 flex-1 whitespace-nowrap">My Orders</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/buyerOrder" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                           
                           <span class="ml-3 flex-1 whitespace-nowrap">Buyer Order</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/addProduct" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                           
                           <span class="ml-3 flex-1 whitespace-nowrap">Add Product</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/manageOrder" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                           
                           <span class="ml-3 flex-1 whitespace-nowrap">Manage Products</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/users" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                           
                           <span class="ml-3 flex-1 whitespace-nowrap">All Users</span>
                        </Link>
                     </li>
                     <li>
                        <Link to="/dashboard/sellers" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                           
                           <span class="ml-3 flex-1 whitespace-nowrap">Sellers</span>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </aside>
                </div>
                <div className='col-span-4'>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;