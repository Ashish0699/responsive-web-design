import React from "react";

const CustomerSection = () => {
  return (
    <>
      <div className="w-full mt-4">
        <div className="flex flex-col lg:flex-row content-wrapper">
          <div className="lg:w-1/3 w-full flex justify-center mb-8 lg:mb-0 lg:justify-start">
            <div className="flex justify-center">
              <img
                className="max-w-full h-auto"
                src="./images/team-image.png"
                alt="customer section Image"
              />
            </div>
          </div>

          <div className="lg:w-2/3 w-full flex flex-col">
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="text-xl font-semibold text-green-600 mb-2">
              Tim Smith
            </h5>
            <p className="text-base text-gray-700 mb-4">
              British Dragon Boat Racing Association
            </p>
            <div className="flex items-end justify-between">
              <img
                className="w-3/4 sm:w-1/2"
                src="./images/patner-image-color.svg"
                alt="Partners Image"
              />
              <h5 className="text-xl font-semibold text-green-600 cursor-pointer">
                Meet all Customers →
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSection;
