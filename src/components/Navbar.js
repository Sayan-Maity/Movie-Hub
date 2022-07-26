import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between  p-5 z-[100] w-full absolute">
        <Link to="/">
          <h1 className="text-green-500 text-4xl font-bold cursor-pointer">
            MOVIE HUB
          </h1>
        </Link>

        <div>
          <Link to="login">
            <button className="text-white px-6 py-2 rounded-sm  mr-2 cursor-pointer hover:bg-gray-300 hover:text-black transition-all ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 px-6 py-2 rounded-sm cursor-pointer hover:bg-green-600 transition-all">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
