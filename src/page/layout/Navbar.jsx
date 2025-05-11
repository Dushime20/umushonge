import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 lg:px-28 max-w-[1280px] mx-auto h-20">
        {/* Logo */}
        <div className="flex gap-3">
          {/* <span>
            <img src="image/logo.jpg" alt="log" class="w-10 h-auto" />

            </span> */}
          <NavLink
            to="/"
            className="uppercase text-3xl  text-green-800 font-sans font-bold"
          >
            UMU<span className="text-yellow-500 text-xl">shonge</span>
          </NavLink>
        </div>
        <div className="flex gap-2 justify-center items-center">
  <div className="hidden md:block lg:flex lg:w-56 lg:bg-slate-100 lg:text-gray-950 text-gray-200 py-3 rounded-3xl items-center cursor-text">
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent outline-none text-center text-sm text-gray-950 w-full lg:w-auto placeholder-gray-400"
    />
  </div>
 <div className="w-10 h-10 bg-green-800 flex items-center justify-center rounded-lg">
 <FaSearch className="ml-1 cursor-pointer text-white" />
 </div>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            <li className="p-4  transition duration-300">
              <NavLink to="/" className="text-green-800 hover:text-yellow-600">
                Home
              </NavLink>
            </li>
            <li className="p-4  transition duration-300">
              <NavLink to="/about_us" className="text-green-800 hover:text-yellow-600">
                About Product
              </NavLink>
            </li>
            <li className="p-4  transition duration-300">
              <NavLink to="/service" className="text-green-800 hover:text-yellow-600">
                Shop
              </NavLink>
            </li>
          
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <NavLink to={"/cart"}><FaCartPlus className="text-2xl text-green-800"/></NavLink>
          </div>
          <div>
            <NavLink to={"/profile"}><IoPerson className="text-2xl text-green-800"/></NavLink>
          </div>
          
            <button className=" hidden md:block w-20 h-10 rounded-lg bg-green-800 hover:bg-yellow-600 text-white p-2" >
                sign up
            </button>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <div className="flex items-center justify-between">
            <div>
              {!nav ? (
                <AiOutlineMenu size={30} className="text-green-800" />
              ) : (
                <AiOutlineClose size={30} className="text-green-800" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[70%] bg-white text-green-800 h-full ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          {/* <div className="flex justify-end p-4">
            <AiOutlineClose size={30} className="text-white" onClick={handleNav} />
          </div> */}
          <div className="flex justify-center items-center m-5">
            <img src="/image/logo.jpg" alt=" logo" 
            className="w-20 h-20"/>
          </div>
          <ul className="space-y-6 text-center mt-8">
            <li className="p-4  transition duration-300">
              <NavLink to="/" className="text-green-800">
                Home
              </NavLink>
            </li>
          
            <li className="p-4  transition duration-300">
              <NavLink to="/contact" className="text-green-800">
                About product
              </NavLink>
            </li>
            <li className="p-4  transition duration-300">
              <NavLink to="/all_car" className="text-green-800">
                Shop
              </NavLink>
            </li>
            <button className=" w-20 h-10 rounded-lg bg-green-800 hover:bg-yellow-600 text-white p-2" >
                sign up
            </button>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
