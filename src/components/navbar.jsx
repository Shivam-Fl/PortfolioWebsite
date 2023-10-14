import { useState } from "react";
import menu from "/assets/menu.svg";

import close1 from "/assets/close1.svg";

const navLink = [
  {
    id: 0,
    header: "Home",
    link: "#home",
  },
  {
    id: 1,
    header: "Skills",
    link: "#skills",
  },
  {
    id: 2,
    header: "Projects",
    link: "#projects",
  },
  {
    id: 3,
    header: "Experience",
    link: "#experience",
  },
 ];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((prevToggle) => !prevToggle);
  const closeMenu = () => setToggle(false);

  return (
    <div className="mb-4 sticky top-0 py-3 bg-black z-10">
      <div className="flex justify-between align-center text-lg  sm:text-2xl">
        {/* Logo */}

        <h1 className=" font-zenDots font-bold justify-self-center self-center">Shivam</h1>

        {/* Navlinks */}
        <div className="hidden md:flex self-center">
          <div className="flex gap-x-20 self-center text-xl xl:text-3xl font-medium font-montserrat">
            {navLink.map((step) => (
              <a
                key={step.id}
                id={step.id}
                href={step.link}
                
              >
                {step.header}
              </a>
            ))}
          </div>
        </div>

        <div className="flex  gap-x-2 sm:gap-x-4 self-center   ">
          
          <a href="">
            <button 
            style={{
                            border:" 1px solid rgba(0, 0, 0, 0.50)",
                            background: "linear-gradient(180deg, rgba(254, 200, 241, 0.90) -22.92%, rgba(254, 200, 241, 0.00) 26.73%), radial-gradient(702.72% 378.76% at 29.94% 119.23%, #602EA6 0%, #D19088 100%)",
                            backgroundBlendMode: "overlay, normal",
                            boxShadow: "0px 30px 30px 0px rgba(0, 0, 0, 0.40), 0px 0px 5px 0px #FFACE4 inset, 0px -1px 8px 0px #9375B6 inset"
            }}
            className="border rounded-xl px-3 py-1 self-center font-['Inter']">
              <a href="#contact">Contact me</a>
              
            </button>
          </a>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center p-1 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {toggle ? (
                <img className="h-8 w-8" src={close1} alt="" />
              ) : (
                <img className="h-8 w-8" src={menu} alt="" />
              )}
            </button>
          </div>
        </div>

        {/* Hamburger */}
      </div>

      {/* Mobile Nav */}
      {toggle && (
        <div className="flex flex-col md:hidden">
          <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
            {navLink.map((step) => (
              <a
                key={step.id}
                className="text-center cursor-pointer hover:text-[#8B70AD] block px-3 py-2 rounded-md text-base font-medium"
                href={step.link}
          
                onClick={closeMenu}
              >
                {step.header}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}