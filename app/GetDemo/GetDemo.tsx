import React from "react";

const GetDemo = () => {
  return (
    <div className="w-full py-8 backgroundColor">
      <div className="content-wrapper mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold mt-5 mx-auto">
          Pellentesque suscipit fringilla libero eu.
        </h1>

        {/* Button */}
        <div className="my-4 flex justify-center">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded  transition duration-300">
            Get a Demo &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetDemo;
