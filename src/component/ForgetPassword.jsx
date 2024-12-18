import React from 'react'
import password from "../images/ForgotPassword.svg"
import logo from "../images/logonewimage/1.png"
import { MdOutlineMailOutline } from "react-icons/md";

function ForgetPassword() {
  return (
    <div className='w-full flex'>
    <div className='w-1/2 bg-slate-50 hidden  lg:flex justify-center items-center '>
    
    <img src={password} className=''></img>

    <div >
    
    </div>
   
    
    
    </div>
    <div className='md:w-1/2 w-full md:h-[100vh] mt-16 md:mt-0  '>
    <div className='lg:flex justify-center  items-center md:mt-24 my-8 bg-white text-2xl font-bold '>
        <div className='flex justify-center'>
        <img src={logo} alt=""  className='h-30 w-40'/>
            </div>
            </div>

            <div className='flex justify-center items-center  border-gray-400 '>
            <div className=' mx-4  md:p-4 p-4 border-slate-200  border rounded-xl w-[450px]  '>
    <h1 className='font-bold md:text-2xl text-xl'>Forgot Password ?</h1>
    <p className='text-sm text-slate-500 mt-2 '>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
     <h1  className='font-semibold py-3 text-sm mt-3'>Email Address </h1>
     
     
             <div class="relative">
             <input type="text" 
                    class=" w-[100%] pl-4 pr-4 py-2 border mx-2 rounded-lg md:text-base text-sm" />
             <div class="absolute inset-y-0 right-2 pl-3 
                         flex items-center 
                         pointer-events-none">
                             <MdOutlineMailOutline /> 
                
             </div>
         </div>
         <button className='w-[100%] bg-[#506ee4] my-4 py-2 rounded-md text-white font-medium '>Sign in </button>

         <p className='text-center text-base'>Return to<span className='text-[#506ee4]'> Login</span></p>
    
    
    

    </div>

    
    </div>
    <div className='flex md:mt-16 mt-10 justify-center' >
                  <p  className='text-slate-500 text-sm '>Copyright © 2024 - Nexcap </p>
                  </div>
    </div>
                </div>

  )
}

export default ForgetPassword