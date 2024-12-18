// import React, { useState, useRef } from "react";
// import logo from '../images/logonewimage/1.png'
// import avatar from '../images/avatar-27.jpg'

// function LockScreen() {
//   const [pin, setPin] = useState(new Array(6).fill(""));
//   const inputRefs = useRef([]);

//   const handleChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newPin = [...pin];
//     newPin[index] = value;
//     setPin(newPin);
    
   

//     // Move to the next input box
//     if (value && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       if (!pin[index] && index > 0) {
//         inputRefs.current[index - 1].focus();
//       }
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
//     const newPin = pin.map((_, i) => pastedData[i] || "");
//     setPin(newPin);

//     // Autofocus to the next empty field
//     const filledIndex = pastedData.length - 1;
//     if (filledIndex < 5) {
//       inputRefs.current[filledIndex + 1].focus();
//     }
//   };

//   function handlesubmit(){
//     console.log(pin);
//     alert(pin)
   
    
//   }
    
     
//   return (
//     <div>
// <div className='flex justify-center items-center mt-3'><img src={logo} alt="" className='h-30 w-40' /></div>
// <div className='flex justify-center items-center  border-gray-400 '>
//                 <div className=' mx-4  md:p-6 p-4 border-slate-100  border rounded-xl w-[500px] md:my-16 my-10 '>
//        <h1 className='font-bold text-2xl text-center'>Welcome Back!</h1>
//        <div className='flex justify-center mt-6'>
//         <img src={avatar} className='w-20 h-20 rounded-full' alt="" />
//        </div>
//        <h1 className='text-center mt-3 font-medium'> krishna kumar</h1>

//        {/* <div className='flex gap-4 justify-center my-6'>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1"  type="text" placeholder=""></input>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1"  type="text" placeholder=""></input>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1"  type="text" placeholder=""></input>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1" type="text" placeholder=""></input>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1"  type="text" placeholder=""></input>
//        <input className='lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem] text-center border-2 border-slate-400 rounded-md' maxlength="1"  type="text" placeholder=""></input>
//        </div> */}


//        <div
//       className="flex gap-2 justify-center my-10"
//       onPaste={handlePaste}
//     >
//       {pin.map((digit, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength="1"
//           value={digit}
//           onChange={(e) => handleChange(e.target.value, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           ref={(el) => (inputRefs.current[index] = el)}
//           className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       ))}
//     </div>
  
//        <div className=' flex justify-center'>
//         <button className='md:w-[80%] w-[100%] bg-[#506ee4] font-medium rounded-md text-white py-2' onClick={handlesubmit}>Login</button>
//        </div>
        
         
        

//         </div>

      

        
//         </div>
//         <div className='flex justify-center items-center  text-slate-600 gap-4 md:mt-10 mt-6 '>
//         <div>Term & Condition</div>
//         <div>Privacy</div>
//         <div>Help</div>
//         <div>English</div>
       
   
//         </div>
//         <div className='flex  justify-center mt-1' >
//                       <p  className='text-slate-500 text-sm '>Copyright © 2024-Nexcap </p>
//                       </div>

//     </div>
//   )
// }

// export default LockScreen
import React, { useState, useRef } from "react";
import logo from "../images/logonewimage/1.png";
import avatar from "../images/avatar-27.jpg";

function LockScreen() {
  const [pin, setPin] = useState(new Array(6).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    setError(""); // Clear previous errors

    // Move to the next input box
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newPin = pin.map((_, i) => pastedData[i] || "");
    setPin(newPin);

    // Autofocus to the next empty field
    const filledIndex = pastedData.length - 1;
    if (filledIndex < 5) {
      inputRefs.current[filledIndex + 1].focus();
    }
  };

  const handleSubmit = () => {
    if (pin.some((digit) => digit === "")) {
      setError("Please enter a complete PIN.");
      return;
    }

    console.log(pin.join(""));
    alert("PIN Submitted: " + pin.join(""));
  };

  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center items-center mt-3">
        <img src={logo} alt="Logo" className="h-30 w-40" />
      </div>

      {/* Lock Screen */}
      <div className="flex justify-center items-center border-gray-400">
        <div className="mx-4 md:p-6 p-4 border-slate-100 border rounded-xl w-[500px] md:my-16 my-10">
          <h1 className="font-bold text-2xl text-center">Welcome Back!</h1>

          {/* User Avatar */}
          <div className="flex justify-center mt-6">
            <img src={avatar} className="w-20 h-20 rounded-full" alt="User Avatar" />
          </div>
          <h1 className="text-center mt-3 font-medium">Krishna Kumar</h1>

          {/* PIN Input */}
          <div className="flex gap-2 justify-center my-10" onPaste={handlePaste}>
            {pin.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={focusedIndex === index ? digit : digit ? "●" : ""}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label={`Enter PIN digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="md:w-[80%] w-[100%] bg-[#506ee4] font-medium rounded-md text-white py-2 hover:bg-[#3f56bf] active:bg-[#2e428f] transition"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center text-slate-600 gap-4 md:mt-10 mt-6">
        <div>Terms & Conditions</div>
        <div>Privacy</div>
        <div>Help</div>
        <div>English</div>
      </div>
      <div className="flex justify-center mt-1">
        <p className="text-slate-500 text-sm">Copyright © 2024-Nexcap</p>
      </div>
    </div>
  );
}

export default LockScreen;
