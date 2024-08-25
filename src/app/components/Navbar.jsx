import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#040C19] h-16 flex justify-center items-center px-6">
        <img src="Logo4JA.png" alt="Logo4JA" className="h-20 px-20" />
        <div className="flex space-x-10">
          <div className="text-white hover:text-[#00AFFF] font-black cursor-pointer">
            ABOUT
          </div>
          <div className="text-white hover:text-[#00AFFF] font-black cursor-pointer">
            WORK
          </div>
          <div className="text-white hover:text-[#00AFFF] font-black cursor-pointer">
            FORM
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
