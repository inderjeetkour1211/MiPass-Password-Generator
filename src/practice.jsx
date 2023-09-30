import { useState, useCallback, useEffect, useRef } from "react";
import { LuRefreshCw } from "react-icons/lu";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    // Array.from({ length }).forEach(() => {
    //   let charIndex = Math.floor(Math.random() * str.length);
    //   pass += str.charAt(charIndex);
    // });

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(
    () => passwordGenerator(),
    [length, numberAllowed, charAllowed, passwordGenerator]
  );

  //copy to clipBoard functionality
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [password]);
  return (
    <>
      <h1 className=" text-white text-4xl mb-5">Password Generator</h1>
      <div className="bg-gray-600 border rounded-xl my-12 py-10 w-full max-w-lg shadow-sm mx-auto px-8">
        {/*       
        {(copied) {<div className="text-white mb-2 text-center">Copied</div>}} */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <div className="outline-none w-full py-1 px-3 bg-white">
            <input
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            /> 
            </div> 
          
            <button className="text-red-700">
              <LuRefreshCw />
            </button>
            <button
              className="outline-none bg-red-600 font-medium text-white px-3 py-0.5 shrink-0 hover:bg-red-700 hover:font-semibold"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          
        </div>
        <div className="flex-col sm:flex text-sm gap-x-2">
          <div className=" flex items-center py-3 sm:py-0 gap-x-1">
            <input
              type="range"
              name="length"
              min={8}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center py-1 sm:py-0 gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center py-3 sm:py-0 gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
