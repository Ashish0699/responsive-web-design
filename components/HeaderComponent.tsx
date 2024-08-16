import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <div>
        <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gray-100 p-4">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <a className="flex items-center" href="#">
              <img
                src="./images/icon-white.svg"
                alt="logo"
                width="35"
                height="24"
                className="mr-2"
              />
              <h1 className="text-xl font-bold">Nexcent</h1>
            </a>
          </div>

          <div
            className="hidden lg:flex lg:flex-grow lg:items-center"
            id="navbar-content"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto lg:mx-auto">
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  Service
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-500" href="#">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="flex space-x-3 mt-4 lg:mt-0">
              <button className="px-4 py-2 bg-green-500 text-white  rounded">
                Login
              </button>
              <button className="px-4 py-2 bg-green-500 text-white  rounded">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;
