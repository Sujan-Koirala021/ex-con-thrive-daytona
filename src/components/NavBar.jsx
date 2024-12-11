import React from "react";
import { Link } from "react-router-dom"
import AppLogo from "../assets/img/logo.png";
export default function NavBar() {
  return (
    <div>
      <div className="p-6  flex justify-between items-center">
        {/* Logo and product name on the left */}

        <Link to="/">
          <div className="logo-img pr-5 flex items-center">
            <img src={AppLogo} alt="Logo img" className="h-16 w-16 mt-4" />

            <div className="pl-4 font-bold text-xl">Ex-Cons Thrive</div>
          </div>
        </Link>

        {/* Signup button on the right */}
        <div className="flex items-center space-x-4">
          {/* Middle navigation links */}
          <Link to="/features">
            <div className="text-black">Features</div>
          </Link>
          <Link to="/faq">
            <div className="text-black">FAQ</div>
          </Link>
          <Link to="/services">
            <button className="bg-orange-500 text-black hover:bg-orange-600 px-6 py-2 rounded-full">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
}
