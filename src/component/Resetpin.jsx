import React from 'react'
import pin from "../images/pin.svg"
import logo from "../images/logonewimage/1.png"
import Resetpincomp from './Resetpincomp'

function Resetpin() {
  return (
    <div className='w-full flex'>
    <div className='w-1/2 bg-slate-50 hidden  lg:flex justify-center items-center '>
    
    <img src={pin} className=''></img>

    
    
    <div >
    
    </div>
   
    
    
    </div>
    <div className='md:w-1/2 w-full md:h-[100vh]   '>
    <div className='lg:flex justify-center items-center md:mt-14 my-3 bg-white text-2xl font-bold '>
        <div className='flex justify-center mt-10 md:mt-0'>
        <img src={logo} alt=""  className='h-30 w-40'/>
            </div>
        
      
    </div>
    <div className='flex justify-center items-center  border-gray-400 '>
<div className=' mx-4  p-6 border-slate-100  border rounded-xl w-[450px]  '>



<Resetpincomp/>


</div>
                  </div>
                  <div className='flex md:mt-12 mt-2 justify-center' >
                  <p  className='text-slate-500 text-sm '>Copyright © 2024-Nexcap </p>
                  </div>
                  

    </div>
</div>
  )
}

export default Resetpin