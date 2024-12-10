import React from "react";
import heroImg from "../assets/img/heroImg.png"
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div>

      <div className="hero-container text-black mt-2 ml-4 mr-4 bg-slate-400 pt-12 p-3 pl-16 rounded-3xl h-[70vh] flex justify-between">
        <div className="pl-12 pt-16 p-8 hero-info">
          <div className="text-5xl font-bold">Ex-Cons Thrive</div>
          <div className="pt-6 text-2xl">Empowering Second Chances</div>
          <div className="pt-4 text-lg">Rebuild, Reinvent, Rediscover your path to success.</div>
          <div className="pt-6">
            <Link to="/services">
            <button className="pl-6 pr-6 p-3 border-none bg-orange-500 text-black rounded-full hover:bg-orange-600">
              Start your Journey <span>&#8594;</span>
            </button>
            </Link>
          </div>
          <div className="flex space-x-8 pt-12 text-2xl">
            <div>
            10K+ <sub className="text-sm">USERS</sub>
            </div>
            <div>
            20K+ <sub className="text-sm">LIKES</sub>
            </div>
            <div>
            12K+ <sub className="text-sm">DOWNLOADS</sub>
            </div>
          </div>
        </div>
        <div className="heroImg pr-14 p-8">
          <img src={heroImg} alt="Hero-image" className="scale-125" />
        </div>
      </div>

    </div>
  )
}

export default Hero;
