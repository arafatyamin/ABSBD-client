import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center my-5 ">
      <div className="w-full mx-5 lg:w-1/2 flex-col border bg-white px-6 py-2 shadow-md rounded-[4px] ">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl">ABSBD</h1>
          <p className='text-gray-500'>welcome to sign up page.</p>
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" />
          <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
        </div>
        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-[#48bb78] bg-[#21e673c9] text-white rounded-[4px] hover:bg-[#03923f] scale-115 duration-300" type="submit">Sign in</button>
        <div className="mt-5 flex justify-between text-sm text-gray-600">
          <Link href="#">Forgot password?</Link>
          <Link to='/signUp' className='text-gray-900 hover:text-blue-800 font-bold'>Sign up</Link>
        </div>
        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or you can sign with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3    ">
          <Link className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300">
            <FcGoogle className='h-full w-full' />
          </Link>
          <Link className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300">
            <BsGithub className='h-full w-full' />
          </Link>
          <Link className="h-7 grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300">
            <FaFacebook className='h-full w-full' />
          </Link>
          <Link className="bg-gray-400 h-7 w-7 rounded-3xl text-center grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 " href="">...</Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;