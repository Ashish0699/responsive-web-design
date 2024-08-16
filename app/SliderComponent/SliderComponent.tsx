import React from "react";

const SliderComponent = () => {
  return (
    <>
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3 w-full mb-12 lg:mb-0 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Lessons and insights <br />
                <span className="text-green-500">from 8 years</span>
              </h1>
            </div>
            <div className="mb-8 text-gray-700">
              Where to grow your business as a photographer: site or social
              media?
            </div>
            <div>
              <button className="px-6 py-3 bg-green-500 text-white rounded-md  transition">
                Register
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 w-full flex justify-center">
            <img
              className="w-full max-w-sm"
              src="./images/Illustration.svg"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
