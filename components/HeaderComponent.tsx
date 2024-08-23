import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Service",
    "Features",
    "Products",
    "Testimonials",
    "FAQ",
  ];

  return (
    <>
      <div className=" bg-gray-100 p-4">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="h-[60px] lg:h-[80px]"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="xl:hidden max-w-[24px] max-h-[24px] md:max-w-[26px] md:max-h-[26px]"
            />
            <NavbarBrand>
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link className="flex items-center" href="#">
                  <img
                    src="./images/icon-white.svg"
                    alt="logo"
                    width="35"
                    height="24"
                    className="mr-2"
                  />
                  <h1 className="text-xl font-bold">Nexcent</h1>
                </Link>
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="gap-4" justify="center">
            <div>
              <nav className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gray-100 p-4">
                <div className="flex items-center justify-between w-full lg:w-auto"></div>

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
                </div>
              </nav>
            </div>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="space-x-[14px] hidden md:block">
              <div className="flex space-x-3 mt-4 lg:mt-0">
                <button className="px-4 py-2 bg-green-500 text-white  rounded">
                  Login
                </button>
                <button className="px-4 py-2 bg-green-500 text-white  rounded">
                  Sign up
                </button>
              </div>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="px-4 lg:mt-4 md:px-auto md:container md:mx-auto h-full border border-t-0">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <div className="text-gray-700 hover:text-blue-500">
                  {" "}
                  <Link className="w-full" href="/">
                    {item}
                  </Link>
                </div>
              </NavbarMenuItem>
            ))}
            <div className="space-x-3 mt-1 lg:mt-0">
              <button className="px-4 py-2 bg-green-500 text-white  rounded">
                Login
              </button>
            </div>
            <div>
              <button className="px-4 py-2 bg-green-500 text-white  rounded">
                Sign up
              </button>
            </div>
          </NavbarMenu>
        </Navbar>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};

export default HeaderComponent;
