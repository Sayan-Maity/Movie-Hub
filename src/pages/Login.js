import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="/images/background.jpg"
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px]  mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold text-center text-green-500">
                Sign In
              </h1>
              <form action="" className="text-center w-full flex flex-col py-4">
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="p-3 my-2 rounded-sm bg-gray-800"
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 my-2 rounded-sm bg-gray-800"
                />
                <button className="bg-green-500 text-black py-3 my-6 rounded-sm font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-gray-600 text-sm">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help ?</p>
                </div>
                <p className="py-4 text-left text-green-500">
                  <span className="text-gray-600 text-sm">
                    New to Movie Hub?
                  </span>{' '}
                  <Link className="hover:underline pl-1" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
