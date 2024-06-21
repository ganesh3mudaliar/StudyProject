import React, { useState } from 'react';
import loginImage from "../assets/Images/LoginImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <div className="flex flex-col lg:flex-row items-center w-11/12 max-w-4xl shadow-lg bg-gray-900 rounded-lg">
        <div className="w-full lg:w-1/2 p-6">
          <img src={loginImage} alt="Login" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">Welcome Back!</h2>
          <form className="space-y-4">
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
            <div className="flex items-center">
              <input type="checkbox" id="formBasicCheckbox" className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-2 focus:ring-blue-500" />
              <label htmlFor="formBasicCheckbox" className="ml-2 block text-sm text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            <div className="text-center mt-3">
              <a href="#forgot-password" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
