import React, { useState } from "react";
import "./Navbar.css";
import { IoBagSharp, IoLogoGoogle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
  const [active, setActive] = useState("navBar");

  // Function to set toggle active
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to remove navbar
  const removeNavbar = () => {
    setActive("Navbar");
  };

  // Checking there if the screen size is small so we on toogle
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <IoBagSharp /> Startup
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Startup
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Investor
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                AboutUs
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                <IoLogoGoogle /> Login
              </a>
            </li>
            <button className="btn">
              <a href="#">Add Listing</a>
            </button>
          </ul>
          {!isSmallScreen && ( // Conditionally render the close button if not a small screen
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle />
            </div>
          )}
        </div>
        {!isSmallScreen && ( // Conditionally render the toggle button if not a small screen
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots />
          </div>
        )}
      </header>
    </section>
  );
}

export default Navbar;
