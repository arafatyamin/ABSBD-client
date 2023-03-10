import React from 'react';

const BuyerOrder = () => {
    return (
        <div class="p-4">
      <div class="bg-white p-4 rounded-md">
        <div>
          <h2 class="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
          <div>
            <div>
              <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>email</span>
                </div>
                <div>
                  <span>price</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
                <div>
                  <span>payment</span>
                </div>
                <div>
                  <span>action</span>
                </div>
              </div>
              <div>
                <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div class=" flex">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div>
                    <span>212</span>
                  </div>
                  <div class="">
                    <span>28/12/2021</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-green-600'>pay</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-red-600'>X</span>
                  </div>
                </div>
                <div class="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div class="">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div>
                    <span>212</span>
                  </div>
                  <div class="">
                    <span>28/12/2021</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-green-600'>pay</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-red-600'>X</span>
                  </div>
                </div>
                <div class="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div class="">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div>
                    <span>212</span>
                  </div>
                  <div class="">
                    <span>28/12/2021</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-green-600'>pay</span>
                  </div>
                  <div class="">
                    <span className='text-lg text-red-600'>X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BuyerOrder;