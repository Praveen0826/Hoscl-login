import React from 'react'
import logo from '../images/logonewimage/1.png'
import avatar from '../images/avatar-27.jpg'

function LockScreen() {

    
     
  return (
    <div>
<div className='flex justify-center items-center mt-3'><img src={logo} alt="" className='h-30 w-40' /></div>
<div className='flex justify-center items-center  border-gray-400 '>
                <div className=' mx-4  md:p-6 p-4 border-slate-300  border rounded-xl w-[500px] my-20 '>
       <h1 className='font-bold text-2xl text-center'>Welcome Back!</h1>
       <div className='flex justify-center mt-6'>
        <img src={avatar} className='w-20 h-20 rounded-full' alt="" />
       </div>
       <h1 className='text-center mt-3 font-medium'> krishna kumar</h1>

       <div className='flex gap-4 justify-center my-6'>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1"  type="text" placeholder=""></input>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1"  type="text" placeholder=""></input>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1"  type="text" placeholder=""></input>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1" type="text" placeholder=""></input>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1"  type="text" placeholder=""></input>
       <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border border-slate-400' maxlength="1"  type="text" placeholder=""></input>
       </div>
       <div className=' flex justify-center'>
        <button className='w-[80%] bg-[#506ee4] font-medium rounded-md text-white py-2'>Login</button>
       </div>
        
         
        

        </div>

      

        
        </div>
        <div className='flex justify-center items-center  text-slate-600 gap-4 mt-10'>
        <div>Term&Condition</div>
        <div>Privacy</div>
        <div>Help</div>
        <div>English</div>
       
   
        </div>
        <div className='flex  justify-center mt-3' >
                      <p  className='text-slate-500 text-sm '>Copyright © 2024-Nexcap </p>
                      </div>

    </div>
  )
}

export default LockScreen