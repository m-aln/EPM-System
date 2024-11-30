import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import logo from '../Asstes/background.webp';
import { BsPersonFill } from "react-icons/bs";
import NavBar from '../Component/NavBar'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="w-screen h-screen bg-center bg-no-repeat  flex justify-center items-center relative" style={{ backgroundImage: `url(${logo})` }}>
      
      <div className="w-[100%] h-[100%] bg-[#3a2e21] bg-opacity-10 absolute"></div>
      <div className="w-[80%] h-[80%] bg-[#e0e1e1] bg-opacity-90 z-50 rounded-2xl signup-form flex flex-col items-center gap-3">
        <div className="border-2 border-gray-300 w-24 h-24 rounded-full flex justify-center items-center">
          <BsPersonFill size={60} className="person-icon" />
        </div>
        <h2 className="text-2xl font-semibold">Signup</h2>
        <div className="w-[95%] grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>First Name</label>
            <input type="text" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Last Name</label>
            <input type="text" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Identifier</label>
            <input type="text" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Gender</label>
            <select className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md">
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input type="email" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input type="password" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <input type="password" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1">
            <label>phone</label>
            <input type="tel" className="outline-none p-2 h-10.5 bg-gray-100 border-2 border-gray-300 rounded-md" />

          </div>
        </div>
        <button className="mt-5 w-[50%] bg-[#2a6f97] h-12 rounded-md text-lg hover:bg-[#48bfe3] text-white">
          Signup
        </button>
        <p className='text-[#0693be] text-center text-lg '>Don't have an account?
   <Link  to={'/login'}>login</Link>
    </p>
      </div>
    </div>
  );
};

export default Signup;