import React from "react";

function Footer() {
  return (
    <div className="w-screen flex flex-col items-center justify-center text-center space-y-5 p-14 text-gray-200 bg-blue-500">
      <p>Lorem ipsum dolor sit amet.</p>
      <h2 className="text-2xl ">stay up-todate with what we are doign</h2>
      <div className="space-x-5 space-y-6">
        <input
          type="text"
          placeholder="search what ever you want"
          className="outline-none border-none px-14 py-2 text-gray-300 rounde-md"
        />
        <button className="bg-red-500 px-14 md:px-5  py-2">submit</button>
      </div>
    </div>
  );
}

export default Footer;
