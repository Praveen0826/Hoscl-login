import React from 'react'
import logo from "../images/Logo.png"
import { useState } from 'react';

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'



function Login() {
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
    <div className="flex justify-center flex-col">
    <div className="w-[30%] flex justify-center flex-col  bg-slate-200 h-[80vh]">
    
    {/* <div className='bg-gradient-to-r from-white via-teal-100 to-white  flex justify-center py-5 '> */}
     {/* <img src={logo} alt="" className='h-28 ' /> */}
   
   
     <div className='flex justify-center'>
     <h1  className='text-3xl font-semibold mt-3'>Welcome Back</h1>
     </div>
     <p className='text-center text-slate-500 mt-3'>Please enter your details to sign in</p>

   
      <p className='flex justify-center mr-64 my-4 font-normal text-lg'>E-Mail</p>
      <div className='flex justify-center  '> <input type="text" className='px-2 py-2 w-80 border-gray-300 border-2' placeholder='Enter your Email' /></div>
      <p className='flex justify-center mr-64 my-4 font-normal text-lg'>Password</p>
      <div className='flex justify-center'>
      <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className='px-2 py-2 w-80 border-gray-300 border-2'
             />
             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              </div>

              <div className='flex justify-center mt-7'>
                <div className='mr-6 font-medium'><input type="checkbox" className='mr-1' />Remember me</div>
                <div><p className='ml-10 text-slate-500'>Forgot Password ?</p></div>
              </div>

              <div className='flex justify-center mt-7 '><button className='bg-black text-white w-80 py-3 rounded-md'>Sign in</button></div>

              <div className='flex justify-center mt-5'><p>Don't have an account yet? <span className='font-medium'>sign up</span> </p></div>
                  </div>
                  </div>
  )
}

export default Login