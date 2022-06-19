import Logo from "../images/logo-bookmark.svg";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
function Header() {
  const [open, setopen] = useState(false);
  console.log(open);
  return (
    <div className="flex items-center  justify-between">
      {/* left-side */}
      <div className="cursor-pointer ">
        <img src={Logo} alt="" />
      </div>
      {/* humburger menu */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => {
          setopen(!open);
        }}
      >
        <MenuIcon className="w-7 " />
      </div>

      {/* right-side */}
      {/* desktop navbar */}
      <div className="text-gray-500 items-center list-none hidden md:inline-flex space-x-14">
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">prices</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li className="bg-red-500 px-5 py-1.5 rounded-md text-gray-200">
          <a href="">login</a>
        </li>
      </div>
      {/* mobile navbar */}
      <div
        className={`text-gray-500 items-center list-none  md:hidden 
       space-y-14 top-14 w-52 h-screen ${
         open ? "right-1" : "hidden"
       } bg-white shadow-lg  text-center absolute right-0`}
      >
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">prices</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
        <li className="bg-red-500 px-5 py-1.5 mx-14 rounded-md text-gray-200">
          <a href="">login</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
