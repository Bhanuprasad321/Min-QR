import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-indigo-500  via-purple-400 to-purple-500 px-2 py-4 md:px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0 sm:gap-2">
        <Link className="text-2xl font-bold tracking-wide" to="/">
          <span className="text-white">Min</span>
          <span className="text-yellow-300">QR</span>
        </Link>
      </div>
      <div className="flex justify-around gap-4">
        <Link to="/" className="text-base px-2 ">
          Home
        </Link>
        <Link to="/generator" className="text-base px-2 ">
          Qr-Gen
        </Link>
        <Link to="/about" className="text-base px-2 ">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
