import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  z-[100] w-full p-4 cursor-pointer sticky top-0 bg-black">
      <h1 className="text-red-600 font-bold uppercase text-4xl ">Netflix</h1>
      <div>
        <button className="text-white mr-3 ">Sign In </button>
        <button className=" bg-red-600 text-white py-2 px-6 rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
