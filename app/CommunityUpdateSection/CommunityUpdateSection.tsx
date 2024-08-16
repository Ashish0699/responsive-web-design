import React from "react";

const CommunityUpdateSection = () => {
  return (
    <>
      <div className="w-full py-8">
        <div className="content-wrapper mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              Caring is the new marketing
            </h1>
            <p className="text-base md:text-lg mx-auto max-w-2xl">
              The Nexcent blog is the best place to read about the latest //
              eslint-disable-next-line react/no-unescaped-entities membership
              insights, trends and more. See who&apos;s joining the community,
              read about how our community is increasing their membership income
              and a lot more.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-full md:w-1/3 mb-4 flex justify-center">
              <div className="relative w-full max-w-xs">
                <img
                  className="w-full h-auto"
                  src="./images/image18.png"
                  alt="Creating Streamlined Safeguarding Processes"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 text-white">
                  <h5 className="text-lg font-bold mb-4 text-center">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </h5>
                  <h5 className="text-primary text-center cursor-pointer">
                    Read More →
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-4 flex justify-center">
              <div className="relative w-full max-w-xs">
                <img
                  className="w-full h-auto"
                  src="./images/image19.png"
                  alt="Safeguarding Responsibilities"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 text-white">
                  <h5 className="text-lg font-bold mb-4 text-center">
                    What are your safeguarding responsibilities and how can you
                    manage them?
                  </h5>
                  <h5 className="text-primary text-center cursor-pointer">
                    Read More →
                  </h5>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-4 flex justify-center">
              <div className="relative w-full max-w-xs">
                <img
                  className="w-full h-auto"
                  src="./images/image20.png"
                  alt="Revamping Membership Model"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 text-white">
                  <h5 className="text-lg font-bold mb-4 text-center">
                    Revamping the Membership Model with Triathlon Australia
                  </h5>
                  <h5 className="text-primary text-center cursor-pointer">
                    Read More →
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityUpdateSection;
