import React from "react";
import features from "../images/illustration-features-tab-1.svg";
function Features() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* top */}
      <div className="space-y-10 min-w-full flex flex-col text-center justify-between md:space-x-32 list-none ">
        <h1 className="text-xl font-medium ">Features</h1>
        <div className="flex items-center text-sm text-gray-400 justify-between md:space-x-32 list-none">
          <li>
            <a href="">Simple bookmarkating</a>
            <div className="w-full bg-red-500 h-1"></div>
          </li>
          <li>
            <a href="">Simple bookmarkating</a>
          </li>
          <li>
            <a href="">speedy bookmarkating</a>
          </li>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between text-center md:text-left md:justify-between space-x-14 items-center md:flex-row mt-5 flex-col">
        <div className="md:w-96 flex-1 mt-6">
          <img src={features} alt="" />
        </div>
        <div className="flex-1 space-y-5 mt-5 capitalize">
          <h1 className="text-3xl leading-tight font-medium">
            Bookmark in on click
          </h1>
          <p className="text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            aperiam fuga est soluta, odit repudiandae architecto error explicabo
            esse voluptatibus!
          </p>
          <button className="bg-blue-700 hidden md:flex text-white py-2 px-4 text-sm rounded-md">
            more info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
