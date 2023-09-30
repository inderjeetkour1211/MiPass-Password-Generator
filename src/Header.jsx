import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const handleThemeSwitch = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className="fixed w-full py-6 px-3 shadow-lg bg-white dark:bg-black">
      <div className="max-w-7xl w-full mx-auto flex justify-between">
        <h2 className="text-black  dark:text-white text-3xl font-bold">
          Mi<span className="text-red-600 hover:text-red-700">Pass</span>
        </h2>

       <div className="bg-red-600 w-10 h-10   rounded-full p-2 flex ">
       <button
          onClick={handleThemeSwitch} 
          className=" text-center mx-auto text-white  dark:text-yellow-400"
        >
          {isDarkTheme ? <BsFillSunFill  /> : <BsFillMoonStarsFill />}
        </button> 
       </div>
      </div>
    </div>
  );
};

export default Header;
