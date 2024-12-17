import React from 'react'
// import logo from "../images/Logo.png"x
import nexlogo from "../images/logoimg.jpg"
import { useState } from 'react';
import background from "../images/bg.png"

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

function Loginpage() {
    const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);


  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
  return (
   <div  className='bg-teal-50 w-[100%] h-[100vh]'>
      <img src={ background} alt=""  className=' relative h-[100vh] w-[100%] '/>
  <div className='sm:flex sm:justify-center sm:items-center'>


 
    <div className=' h-[100vh] md:h-[80vh] w-[100%] md:w-[30%] top-0 lg:mt-24  bg-white rounded-3xl absolute lg:py-0  py-16  '>
      
    <div className=' rounded-3xl   flex justify-center py-5  '> 
    <img src={nexlogo} alt="" className='h-20 w-20  rounded-full' />
    </div>
    <div className='flex justify-center'>
     <h1  className='text-3xl font-bold'>Welcome Back</h1>
     </div>
     <p className='text-center text-slate-500 mt-1'>Please enter your details to sign in</p>
     <p className='flex justify-center mr-56 md:mr-60 md:ml-9 ml-3  mt-4 mb-1 font-medium text-base'>E-Mail Address</p>
      <div className='flex justify-center  '> <input type="text" className='px-2 py-2 w-80 border-gray-300 border-2 rounded-lg' placeholder='Enter your Email' /></div>
      <p className='flex justify-center mr-64 ml-2 mt-4 mb-1 font-medium text-base'>Password</p>
      <div className='flex justify-center'>
      <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className='px-2 py-2 w-80 border-gray-300 border-2 rounded-lg'
             />
             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              </div>
              <div className='flex justify-center mt-7'>
                <div className='mr-6 font-medium '><input type="checkbox" className='mr-1 ' />Remember me</div>
                <div><p className='ml-10 text-slate-500 font-medium'>Forgot Password ?</p></div>
              </div>
              <div className='flex justify-center mt-7 '><button className='bg-black text-white w-80 py-3 rounded-md font-bold'>Sign in</button></div>
 <div className='flex justify-center mt-5'><p>Don't have an account yet? <span className='font-semibold'>sign up</span> </p></div>
              

    </div>

    </div>

   </div>
  )
}

export default Loginpage