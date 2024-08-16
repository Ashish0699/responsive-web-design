import React from "react";

const ManageYourEntireCommunity = () => {
  return (
    <>
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between mt-5">
          <div className="w-full text-center mb-5">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Manage your entire community <br className="hidden md:inline" />{" "}
              in a single system
            </h1>
            <p className="text-lg md:text-xl mt-2">
              Who is Nexcent suitable for?
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-8 p-4">
            <div className="flex justify-center mb-4">
              <img
                src="./images/mambershipicon.svg"
                alt="Membership Icon"
                className="h-16 w-16"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
              Membership <br /> Organization
            </h2>
            <p className="text-center text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-8 p-4">
            <div className="flex justify-center mb-4">
              <img
                src="./images/national-association.svg"
                alt="National Association"
                className="h-16 w-16"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
              National <br /> Associations
            </h2>
            <p className="text-center text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-8 p-4">
            <div className="flex justify-center mb-4">
              <img
                src="./images/national-association.svg"
                alt="Clubs and Groups"
                className="h-16 w-16"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
              Clubs and <br /> Groups
            </h2>
            <p className="text-center text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="w-full p-5 flex flex-col lg:flex-row content-wrapper">
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mb-5 lg:mb-0">
            <img
              className="max-w-full h-auto"
              src="./images/mobile-login.svg"
              alt="Mobile Login"
            />
          </div>

          <div className="w-full lg:w-7/12">
            <div className="unlock-section-content">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                The unseen of spending three <br className="hidden md:inline" />{" "}
                years at Pixelgrade
              </h1>
              <p className="text-base md:text-lg mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <div className="mt-5">
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageYourEntireCommunity;
