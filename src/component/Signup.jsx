import {React,useState} from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import rightimg from '../images/img.svg'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import logo from "../images/logonewimage/1.png"
// import { IoIosPerson } from "react-icons/io";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import ReactCountryDropdown from "react-country-dropdown";
// import Country from './Country';
// import { useState } from 'react';
// import { PhoneInput } from 'react-international-phone';
// import 'react-international-phone/style.css';

function Signup() {
    const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
// const [value, setValue] = useState()
// const [phone, setPhone] = useState('');

// const handleCountryChange = (country) => {
//     console.log(country);
// };

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
    <div className='w-full flex'>
        <div className='w-1/2  bg-slate-50 hidden  lg:flex justify-center items-center '>
        
        <img src={rightimg} className='fixed'></img>

        
        
        <div >
        
        </div>
       
        
        
        </div>
        <div className='md:w-1/2 w-full md:h-[100vh] mt-10 md:mt-0  '>
        <div className='lg:flex justify-center items-center md:mt-3  bg-white text-2xl font-bold '>
            <div className='flex justify-center'>
            <img src={logo} alt=""  className='h-30 w-40'/>
                </div>
            
          
        </div>
        <div className='flex justify-center items-center  border-gray-400 '>
 <div className=' mx-4  p-6 border-slate-100  border rounded-xl w-[450px]  '>



     <div className='' >
     <h1 className='md:text-2xl text-xl font-bold'>Register</h1>
     <p className='text-slate-500 mt-1 mb-3'>Please enter your details to sign up</p>
     </div>

     <h1  className='font-semibold py-3'>FirstName </h1>


        <div class="relative">
        <input type="text" 
               class=" w-[100%] pl-4 pr-4 py-2 border rounded-lg md:text-base text-sm focus:outline-none" />
        <div class="absolute inset-y-0 right-2 pl-3 
                    flex items-center 
                    pointer-events-none">
                     {/* <IoIosPerson /> */}
            
        </div>
    </div>


    <h1  className='font-semibold py-3'>LastName </h1>


        <div class="relative">
        <input type="text" 
               class=" w-[100%] pl-4 pr-4 py-2 border rounded-lg md:text-base text-sm focus:outline-none" />
        <div class="absolute inset-y-0 right-2 pl-3 
                    flex items-center 
                    pointer-events-none">
                     {/* <IoIosPerson /> */}
            
        </div>
    </div>
        

        <h1  className='font-semibold py-3'>Email Address </h1>


        <div class="relative">
        <input type="text" 
               class=" w-[100%] pl-4 pr-4 py-2 border rounded-lg md:text-base text-sm focus:outline-none" />
        <div class="absolute inset-y-0 right-2 pl-3 
                    flex items-center 
                    pointer-events-none">
                        <MdOutlineMailOutline /> 
            
        </div>
    </div>
        
        <h1 className='my-3 font-semibold '>Password</h1>
        <div className='flex justify-center'>
        <input
                          type={type}
                          name="password"
                        //   placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          className='px-2 py-2 w-[100%] md:text-base text-sm  border rounded-lg focus:outline-none'
                     />
                     <span class="flex justify-around items-center" onClick={handleToggle}>
                          <Icon class="absolute mr-10" icon={icon} size={15}/>
                      </span>
                      </div>
                      <div>

                      <h1  className='font-semibold py-3'>Confirm Password </h1>
                      <div className=''>
                      <div className='flex justify-center'>
        <input
                          type={type}
                          name="password"
                        //   placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          className='px-2 py-2 w-[100%] md:text-base text-sm  border rounded-lg focus:outline-none'
                     />
                     <span class="flex justify-around items-center" onClick={handleToggle}>
                          <Icon class="absolute mr-10" icon={icon} size={15}/>
                      </span>
                      </div>
             

      
                      </div>
                      

                      <div>
                     
                      </div>

                    <div className='flex mt-2'>
                        <input type='checkbox'/>
                        <p className='ml-2 '>I Agree to <span className='text-[#506ee4]'>Terms & Privacy</span></p>
                    </div>
                      
                      </div>
                      
                      <button className='w-[100%] bg-[#506ee4] my-4 py-2 rounded-md text-white font-medium '>Sign up </button>
                      
   <p className='text-center text-sm md:text-base'>Aldready have an account?<span className='text-[#506ee4]'> Sign in</span> </p>
                      
                   
                      </div>
                      </div>
                      <div className='flex justify-center' >
                      <p  className='text-slate-500 text-sm mb-3'>Copyright © 2024-Nexcap </p>
                      </div>
                      

        </div>
    </div>
  )
}

export default Signup