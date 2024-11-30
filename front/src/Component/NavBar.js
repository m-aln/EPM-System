import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='w-[100%] h-16 text-[#ffffff] flex justify-evenly items-center bg-[#0694] shadow-md shadow-[#f8f6f4cf] z-50'>
        <div className='w-[20%]'>
            <h1 className='font-thin text-2xl font-[cursive]'>Syria Care</h1>
        </div>
        <div className='w-[50%] h-[100%] flex justify-evenly items-center text-lg font-semibold'>
            <Link to='/' className='hover:text-[#f8f6f4cf]'>Home</Link>
            <Link to='/About Us' className='hover:text-[#f8f6f4cf]'>About us</Link>
            <Link to='/ContactUs' className='hover:text-[#f8f6f4cf]'>Contact us</Link>
        </div>
        <div className='w-[25%] flex justify-evenly items-center'>
            <input type='text' placeholder='search' className='outline-none w-[75%] px-2 py-1.5 rounded-2xl text-white bg-[#ffffff58] placeholder:text-[#ffffff]'/>
            <button className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff]'>
              <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default NavBar