import React, { useState } from 'react';
import signupImage from "../assets/Images/SignupImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <div className="flex flex-col lg:flex-row items-center w-11/12 max-w-4xl shadow-lg bg-gray-900 rounded-lg">
        <div className="w-full lg:w-1/2 p-6">
          <img src={signupImage} alt="Signup" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">Create Account</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="formBasicName" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="formBasicName" placeholder="Enter name" className="mt-1 w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="formBasicEmail" className="block text-sm font-medium text-gray-300">Email address</label>
              <input type="email" id="formBasicEmail" placeholder="Enter email" className="mt-1 w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="relative">
              <label htmlFor="formBasicPassword" className="block text-sm font-medium text-gray-300">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                id="formBasicPassword" 
                placeholder="Password" 
                className="mt-1 w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon 
                icon={showPassword ? faEyeSlash : faEye} 
                className="absolute right-3 top-9 text-gray-400 cursor-pointer" 
                onClick={togglePasswordVisibility} 
              />
            </div>
            <div className="relative">
              <label htmlFor="formBasicConfirmPassword" className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="formBasicConfirmPassword" 
                placeholder="Confirm Password" 
                className="mt-1 w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon 
                icon={showConfirmPassword ? faEyeSlash : faEye} 
                className="absolute right-3 top-9 text-gray-400 cursor-pointer" 
                onClick={toggleConfirmPasswordVisibility} 
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
