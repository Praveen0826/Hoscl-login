import {React,useState} from 'react'
import rightimg from '../images/img.svg'
import logo from "../images/logonewimage/1.png"
import {Icon} from 'react-icons-kit';

import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { MdOutlineMailOutline } from "react-icons/md";


function Newlogin() {

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
    <div className='w-full flex'>
        <div className='w-1/2 bg-slate-50 hidden  lg:flex justify-center items-center '>
        
        <img src={rightimg} className=''></img>

        
        
        <div >
        
        </div>
       
        
        
        </div>
        <div className='md:w-1/2 w-full h-[100vh] mt-20 md:mt-1  '>
        <div className='lg:flex justify-center items-center md:mt-14 my-8 bg-white text-2xl font-bold '>
            <div className='flex justify-center'>
            <img src={logo} alt=""  className='h-30 w-40'/>
                </div>
            
          
        </div>
        <div className='flex justify-center items-center  border-gray-400 '>
 <div className=' mx-4  p-6 border-slate-400 shadow-lg  border rounded-xl w-[450px]  '>



     <div className='' >
     <h1 className='md:text-2xl text-xl font-bold'>Welcome</h1>
     <p className='text-slate-500 mt-1 mb-3'>please enter you data to sign in</p>
     </div>
        

        <h1  className='font-semibold py-3'>Email Address </h1>


        <div class="relative">
        <input type="text" 
               class=" w-[100%] pl-4 pr-4 py-2 border rounded-lg md:text-base text-sm" />
        <div class="absolute inset-y-0 right-2 pl-3 
                    flex items-center 
                    pointer-events-none">
                        <MdOutlineMailOutline /> 
            {/* <svg class="h-5 w-5 text-gray-400" 
                 fill="none" 
                 stroke="currentColor">
                <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                  </path>
            </svg> */}
        </div>
    </div>
        {/* <div></div>
        <input className=' mt-4 w-[100%]  border-gray-200 px-2 py-2 border-2 rounded-lg'></input> */}
        <h1 className='my-3 font-semibold '>Password</h1>
        <div className='flex justify-center'>
        <input
                          type={type}
                          name="password"
                        //   placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          className='px-2 py-2 w-[100%] md:text-base text-sm  border rounded-lg'
                     />
                     <span class="flex justify-around items-center" onClick={handleToggle}>
                          <Icon class="absolute mr-10" icon={icon} size={15}/>
                      </span>
                      </div>
                      <p className=' flex  mt-1 text-[#506ee4] justify-end items-end text-sm'>Forgot Password?</p>
                      <button className='w-[100%] bg-[#506ee4] my-6 py-2 rounded-md text-white font-medium '>Sign in </button>
                      
   <p className='text-center text-sm md:text-base'>Don't have an account?<span className='text-[#506ee4]'> Create Account</span> </p>
                      
                   
                      </div>
                      </div>
                      <div className='flex md:mt-9 mt-6 justify-center' >
                      <p  className='text-slate-500 text-sm '>Copyright © 2024-Nexcap </p>
                      </div>
                      

        </div>
    </div>
  )
}

export default Newlogin