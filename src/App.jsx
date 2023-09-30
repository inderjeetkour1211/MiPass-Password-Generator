import { useState, useCallback, useEffect, useRef } from "react";
import { LuRefreshCw } from "react-icons/lu";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(
    () => passwordGenerator(),
    [length, numberAllowed, charAllowed, passwordGenerator, resetPassword]
  );

  //copy to clipBoard functionality
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [password]);

  // Reset Password
  useEffect(() => {
    if (resetPassword) {
      passwordGenerator();
      setResetPassword(false); // Reset it back to false
    }
  }, [resetPassword, passwordGenerator]);
  return (
    <div className="dark:bg-black  bg-[#f8f8f8] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Random Password Generator
        </h1>
        <p className="text-gray-700  dark:text-white text-center text-lg  font-medium mb-8">
          Looking for a robust password? Try out the MiPass Password Generator
          to create complex passwords that ensure the security of your data.
        </p>
        <div className=" bg-white p-6 rounded-lg shadow-lg">
       
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
              className="w-full py-2 px-3 border text-3xl border-gray-300 rounded-lg focus:outline-none"
           
           /> 
            <button
            className=" text-red-700 pl-2"
            onClick={() => setResetPassword((prev) => !prev)}
          >
            <LuRefreshCw />
          </button> 
          </div>

        <div className=" flex-wrap sm:flex justify-between">
        <div className="flex items-center justify-between mb-4">
            <label htmlFor="length" className="text-gray-700 text-lg">
              Length: {length}
            </label>

            <input
              type="range"
              name="length"
              min={8}
              max={40}
              value={length}
              className="flex-1 ml-4 cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
                
          </div>

         <div>
         <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-gray-700 ml-2 text-lg">
                Numbers
              </label>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-gray-700 ml-2 text-lg">
              Characters
            </label>
          </div> 
         </div>
        </div>

          {copied && (
            <div className="text-green-600 text-center font-bold mb-4">
              Copied
            </div>
          )}

          <button
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700"
            onClick={copyPasswordToClipboard}
          >
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
