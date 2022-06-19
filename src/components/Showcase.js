import React from "react";
import Desktop from "../images/illustration-hero.svg";
function Showcase() {
  return (
    <div
      className="flex justify-center text-center md:text-left md:justify-between
    items-center md:flex-row flex-col-reverse"
    >
      {/* left */}
      <div className="flex-1 justify-center space-y-5 text-center md:text-left md:justify-between items-center md:flex-row  flex-col-reverse">
        <h1 className="text-5xl leading-tight text-gray-600">
          {" "}
          A simple bookmark manager
        </h1>
        <p className="text-gray-500 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
          corrupti.
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <button className="bg-blue-700 shadow text-white py-2  px-5 text-sm rounded-md">
            Get it on chrome
          </button>
          <button className="bg-gray-100 shadow text-gray-700 py-2  px-5 text-sm rounded-md">
            Get it on firefox
          </button>
        </div>
      </div>
      {/* right */}
      <div>
        <img src={Desktop} alt="" />
      </div>
    </div>
  );
}

export default Showcase;
