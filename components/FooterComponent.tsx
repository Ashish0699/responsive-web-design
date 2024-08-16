import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="flex flex-col items-start mb-8 lg:mb-0 lg:w-1/5">
            <div className="flex items-center mb-4">
              <img
                src="./images/icon-white.svg"
                alt="logo"
                className="w-8 h-6 mr-2"
              />
              <h1 className="text-2xl font-semibold">Nexcent</h1>
            </div>
            <div className="mb-4">
              <p>Copyright &copy; 2020 Nexcent Ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex space-x-4">
              <img
                src="./images/instagram-icon.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
              <img
                src="./images/internet-icon.svg"
                alt="Internet"
                className="w-6 h-6"
              />
              <img
                src="./images/twitter-icon.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
              <img
                src="./images/youtube-icon.svg"
                alt="YouTube"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
            <h5 className="text-lg font-semibold mb-4">Support</h5>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3">
            <h5 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Stay up to date
            </h5>
            <div className="flex flex-col lg:flex-row items-center">
              <input
                className="w-full lg:w-3/4 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                type="text"
                name="subscribe"
                id="subscribe"
                placeholder="Your email address"
              />
              <img
                src="./images/emailsend-icon.svg"
                alt="Email-send"
                className="w-6 h-6 ml-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
