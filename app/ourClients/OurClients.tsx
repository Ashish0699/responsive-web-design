import React from "react";
import Image from "next/image";
import HomeStyles from "./ourClients.module.scss";

const OurClients = () => {
  const OUR = [
    { img: "/images/our-clients-images/Logo (1).svg" },
    { img: "/images/our-clients-images/Logo (2).svg" },
    { img: "/images/our-clients-images/Logo (3).svg" },
    { img: "/images/our-clients-images/Logo (4).svg" },
    { img: "/images/our-clients-images/Logo (5).svg" },
    { img: "/images/our-clients-images/Logo (6).svg" },
    { img: "/images/our-clients-images/Logo (1).svg" },
    { img: "/images/our-clients-images/Logo (2).svg" },
    { img: "/images/our-clients-images/Logo (3).svg" },
    { img: "/images/our-clients-images/Logo (4).svg" },
    { img: "/images/our-clients-images/Logo (5).svg" },
    { img: "/images/our-clients-images/Logo (6).svg" },
  ];
  return (
    <div>
      <div className="w-full px-4 md:px-8">
        <div className="our-clients">
          <div className="w-full">
            <div className="container py-10">
              <div className="text-center">
                <h2 className="text-4xl font-semibold text-natural-D_Grey">
                  Our Clients
                </h2>
                <p className="text-base text-natural-D_Grey mt-2">
                  We have been working with some Fortune 500+ clients
                </p>
              </div>

              <div
                className={`${HomeStyles.clientLogoContainer} overflow-hidden mx-auto px-16 py-4 mt-4`}
              >
                <div
                  className={`${HomeStyles.clientLogo} flex flex-wrap justify-center md:flex-nowrap items-center gap-4 md:gap-12`}
                >
                  {OUR.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  ))}
                  {OUR.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  ))}
                  {OUR.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  ))}
                  {OUR.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  ))}
                  {OUR.map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={48}
                      height={48}
                      alt="logo"
                    />
                  ))}
                </div>
                <div className={HomeStyles.clientLogoOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
