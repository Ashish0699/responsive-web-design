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

          <div className="row flex flex-wrap community-card-section">
            <div className="col-md-4 mx-auto d-flex justify-content-center">
              <div className="card-relative">
                <img
                  className="img-fluid"
                  src="./images/image18.png"
                  alt="image"
                  height="286"
                  width="368"
                />
                <div className="community-card p-3">
                  <h5 className="black text-center mb-4">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </h5>
                  <h5 className="primary text-center">Read More→</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-4 community-card-div mx-auto d-flex justify-content-center">
              <div className="card-relative">
                <img
                  className="img-fluid"
                  src="./images/image19.png"
                  alt="image"
                  height="286"
                  width="368"
                />
                <div className="community-card p-3">
                  <h5 className="black text-center mb-4">
                    What are your safeguarding responsibilities and how can you
                    manage them?
                  </h5>
                  <h5 className="primary text-center">Read More→</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-4 community-card-div mx-auto d-flex justify-content-center">
              <div className="card-relative">
                <img
                  className="img-fluid"
                  src="./images/image20.png"
                  alt="image"
                  height="286"
                  width="368"
                />
                <div className="community-card p-3">
                  <h5 className="black text-center mb-4">
                    Revamping the Membership Model with Triathlon Australia
                  </h5>
                  <h5 className="primary text-center">Read More→</h5>
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
