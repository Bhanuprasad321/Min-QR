import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-indigo-500  via-purple-400 to-purple-500 px-2 py-4 md:px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0 sm:gap-2">
        <a className="text-2xl font-bold tracking-wide">
          <span className="text-white">Min</span>
          <span className="text-yellow-300">QR</span>
        </a>
      </div>
      <div className="flex justify-around gap-4">
        <a href="/" className="text-base px-2 ">
          Home
        </a>
        <a href="/generator" className="text-base px-2 ">
          Qr-Gen
        </a>
        <a href="/about" className="text-base px-2 ">
          About
        </a>
      </div>
    </div>
  );
}

export default Navbar;
