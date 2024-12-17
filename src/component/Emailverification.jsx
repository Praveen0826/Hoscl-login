import React from 'react'
import email from '../images/email.svg'
import logo from "../images/logonewimage/1.png"

function Emailverification() {
  return (
    <div className='w-full flex'>
        <div className='w-1/2 bg-slate-50 hidden  lg:flex justify-center items-center '>
        
        <img src={email} className=''></img>

        <div >
        
        </div>
       
        
        
        </div>
        <div className='md:w-1/2 w-full md:h-[100vh] mt-36 md:mt-0  '>
        <div className='lg:flex justify-center  items-center md:mt-36 my-8 bg-white text-2xl font-bold '>
            <div className='flex justify-center'>
            <img src={logo} alt=""  className='h-30 w-40'/>
                </div>
                </div>

                <div className='flex justify-center items-center  border-gray-400 '>
                <div className=' mx-4  md:p-6 p-4 border-slate-200  border rounded-xl w-[500px]  '>
        <h1 className='text-center font-bold md:text-2xl text-xl '>Verify your Email</h1>
        <p className='text-center text-sm text-slate-500 my-2'>We've sent a link to your email ter4@example.com. Please follow the link inside to continue</p>
        <p className='text-center text-base font-normal mt-2'>Don't receive an email?<span className='text-[#506ee4] cursor-pointer'><a> Resent Link</a></span></p>
         
        

        </div>

        
        </div>
        <div className='flex md:mt-16 mt-10 justify-center' >
                      <p  className='text-slate-500 text-sm '>Copyright © 2024-Nexcap </p>
                      </div>
        



   
        

    


        
                      </div>
                    
                      

        </div>
   
  )
}

export default Emailverification