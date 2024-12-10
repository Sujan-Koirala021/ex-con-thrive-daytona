import React from "react";
import { Link } from "react-router-dom"
import AppLogo from "../assets/img/logo.png";
export default function NavBar() {
  return (
    <div>
      <div className="p-6  flex justify-between items-center">
        {/* Logo and product name on the left */}
        <div className="logo-img pr-5 flex items-center">
          <img src={AppLogo} alt="Logo img" className="h-16 w-16 mt-4" />

          <div className="pl-4 font-bold text-xl">Ex-Cons Thrive</div>
        </div>

        {/* Middle navigation links */}
        <div className="categories flex space-x-8">
          <Link to="/">
          <div className="text-black">Home</div>
          </Link>
          <Link to= "/features">
          <div className="text-black">Features</div>
          </Link>
          <Link to="/faq">
          <div className="text-black">FAQ</div>
          </Link>
        </div>

        {/* Signup button on the right */}
        <div>
          <Link to="/services">
            <button className="bg-orange-500 text-black hover:bg-orange-600 px-6 py-2 rounded-full">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
