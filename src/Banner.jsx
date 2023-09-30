
import heroImage from "./assets/Images/heroImage.png";
const Banner = () => {
  return (
  <div className="dark:bg-black">
      <div className=" flex-col sm:flex-row max-w-7xl  px-4 pb-20 pt-40  mx-auto w-full justify-center sm:justify-between items-center sm:flex">
      <div className="max-w-full sm:max-w-[60%] text-center sm:text-left pb-4 w-full align-middle ">
        <div className="sm:mr-14 ">
        <h5 className="text-red-600 font-bold pb-4">PASSWORD GENERATOR TOOL</h5>
        <h2 className="dark:text-white text-3xl sm:text:4xl  md:text-5xl font-bold pb-4">Require an Exclusive, Protected Password?</h2>
        <p className="text-gray-700 text-lg pb-4 font-medium dark:text-white">
          Create, store, and automatically fill login details on all your
          devices using LastPass.
        </p> 
        </div>
      </div>
      <div className="max-w-full sm:max-w-[40%] w-full ">
        <img src={heroImage} alt="HeroImage" />
      </div>
    </div>
  </div>
  );
};

export default Banner;
