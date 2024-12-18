// import React, { useState, useRef } from "react";

// const PinInput = ({ label, pin, setPin }) => {
//   const inputRefs = useRef([]);

//   const handleChange = (value, index) => {
//     if (isNaN(value)) return; // Prevent non-numeric input

//     const newPin = [...pin];
//     newPin[index] = value;
//     setPin(newPin);

//     // Move to the next input box if a value is entered
//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       if (!pin[index] && index > 0) {
//         inputRefs.current[index - 1]?.focus();
//       }
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
//     const newPin = pin.map((_, i) => pastedData[i] || "");
//     setPin(newPin);

//     // Autofocus the next empty input
//     const filledIndex = pastedData.length - 1;
//     if (filledIndex < 5) {
//       inputRefs.current[filledIndex + 1]?.focus();
//     }
//   };

//   return (
//     <div className="mb-6">
//       <label className="block text-lg font-medium mb-2">{label}</label>
//       <div className="flex gap-2 justify-center" onPaste={handlePaste}>
//         {pin.map((digit, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleChange(e.target.value, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             ref={(el) => (inputRefs.current[index] = el)}
//             className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Resetpincomp = () => {
//   const [newPin, setNewPin] = useState(new Array(6).fill(""));
//   const [confirmPin, setConfirmPin] = useState(new Array(6).fill(""));

//   const handleSubmit = () => {
//     if (newPin.join("") !== confirmPin.join("")) {
//       alert("New PIN and Confirm PIN do not match!");
//     } else {
//       alert("PIN updated successfully!");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-1 bg-white  rounded-lg">

// <h1 className='font-bold md:text-2xl text-2xl ml-3 mt-2'>Reset pin ?</h1>
// <p  className=" text-sm text-slate-500 my-2 ml-3">Enter New Pin & Confirm Pin to get inside</p>
//         <h1 className="ml-3 text-sm font-semibold mt-3">New PIN</h1>
//       <PinInput  pin={newPin} setPin={setNewPin} />
//       <h1 className="ml-3 text-sm font-semibold">Confirm New PIN</h1>
//       <PinInput  pin={confirmPin} setPin={setConfirmPin} />

//       <button
//         onClick={handleSubmit}
//         className="w-full py-2 mt-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Resetpincomp;
import React, { useState, useRef } from "react";

const PinInput = ({ label, pin, setPin }) => {
  const inputRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Prevent non-numeric input

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move to the next input box if a value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newPin = pin.map((_, i) => pastedData[i] || "");
    setPin(newPin);

    // Autofocus the next empty input
    const filledIndex = pastedData.length - 1;
    if (filledIndex < 5) {
      inputRefs.current[filledIndex + 1]?.focus();
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <div className="flex gap-2 justify-center" onPaste={handlePaste}>
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
          />
        ))}
      </div>
    </div>
  );
};

const Resetpincomp = () => {
  const [newPin, setNewPin] = useState(new Array(6).fill(""));
  const [confirmPin, setConfirmPin] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError(""); // Clear previous error

    if (newPin.some((digit) => digit === "")) {
      setError("New PIN is incomplete.");
      return;
    }

    if (confirmPin.some((digit) => digit === "")) {
      setError("Confirm PIN is incomplete.");
      return;
    }

    if (newPin.join("") !== confirmPin.join("")) {
      setError("New PIN and Confirm PIN do not match.");
      return;
    }

    alert("PIN updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="font-bold text-2xl mb-2">Reset PIN</h1>
      <p className="text-sm text-slate-500 mb-4">
        Enter a new PIN and confirm it to proceed.
      </p>

      <PinInput label="New PIN" pin={newPin} setPin={setNewPin} />
      <PinInput label="Confirm New PIN" pin={confirmPin} setPin={setConfirmPin} />

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default Resetpincomp;

