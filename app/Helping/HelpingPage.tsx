import React from "react";

const HelpingPage = () => {
  return (
    <>
      <div className="w-full py-8 achievement-section flex items-center	">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Helping a local <br />
              <span className="text-green-600">business reinvent itself</span>
            </h1>
            <p className="text-lg mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8">
            <div className="flex items-center justify-center lg:justify-end">
              <img
                src="./images/members-icon.png"
                alt="Members Icon"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">2,245,341</h1>
                <p className="text-gray-600">Members</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="./images/club-icon.png"
                alt="Clubs Icon"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">46,328</h1>
                <p className="text-gray-600">Clubs</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <img
                src="./images/event-booking.png"
                alt="Events Icon"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">828,867</h1>
                <p className="text-gray-600">Events Bookings</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="./images/payment-icon.png"
                alt="Payments Icon"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold">1,926,436</h1>
                <p className="text-gray-600">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row content-wrapper py-8">
        <div className="lg:w-5/12 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            className="max-w-full h-auto"
            src="./images/calendar.svg"
            alt="calendar-img"
          />
        </div>

        <div className="lg:w-7/12 w-full flex flex-col justify-center">
          <div className="w-full lg:w-3/4 mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
              How to design your site footer like we did
            </h1>
            <p className="text-base md:text-lg mt-4 text-center lg:text-left">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpingPage;
