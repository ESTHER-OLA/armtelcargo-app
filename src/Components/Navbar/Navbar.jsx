// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../AppContext/DarkModeContext";
import search from "../../assets/Group 7.svg";
import notification from "../../assets/Group 8.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //   const handleSignOut = () => {
  // Perform sign-out logic here (e.g., clear user session)
  // Redirect user to sign-in page
  // history.push("/signin");
  //     <button className="text-white mx-4" onClick={handleSignOut}>
  //     Sign Out
  //   </button>
  //   };

  return (
    <nav className={isDarkMode ? "bg-black text-white" : "bg-[#FACE45]"}>
      <div className="max-w-7xl mx-8 px-4">
        <div className="flex justify-between h-16">
          <div className="hidden md:flex items-center">
            <Link to="/" className="text-black mx-4 text-xl font-semibold">
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-black mx-4 text-xl font-semibold"
            >
              Dashboard
            </Link>
            <Link
              to="/deliveries"
              className="text-black mx-4 text-xl font-semibold"
            >
              Deliveries
            </Link>
            <Link
              to="/liststop"
              className="text-black mx-4 text-xl font-semibold"
            >
              ListStop
            </Link>
            <Link
              to="/navigator"
              className="text-black mx-4 text-xl font-semibold"
            >
              Navigator
            </Link>
            <button className="text-black text-md font-extrabold px-3 py-2 bg-red-500 mx-4">
              Sign Out
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 8H2 M22 2H2 M22 14H2"
                    stroke="black"
                    strokeWidth="2.5"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center mx-4">
              <img src={search} alt="" />
            </Link>
            <Link to="/" className="flex items-center mx-4">
              <img src={notification} alt="" />
            </Link>
            <button onClick={toggleDarkMode} className="flex items-center mx-4">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col">
            <Link to="/" className="text-black py-2 px-4 text-xl font-semibold">
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-black py-2 px-4 text-xl font-semibold"
            >
              Dashboard
            </Link>
            <Link
              to="/deliveries"
              className="text-black py-2 px-4 text-xl font-semibold"
            >
              Deliveries
            </Link>
            <Link
              to="/liststop"
              className="text-black mx-4 text-xl font-semibold"
            >
              ListStop
            </Link>
            <Link
              to="/navigator"
              className="text-black mx-4 text-xl font-semibold"
            >
              Navigator
            </Link>
            <button className="text-black text-md font-extrabold px-3 py-2 bg-red-500 mx-4">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
