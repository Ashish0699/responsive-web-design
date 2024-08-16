import Image from "next/image";
import ManageYourEntireCommunity from "./ManageYourEntireCommunity/ManageYourEntireCommunity";
import HelpingPage from "./Helping/HelpingPage";
import CustomerSection from "./CustomerSection/CustomerSection";
import CommunityUpdateSection from "./CommunityUpdateSection/CommunityUpdateSection";
import SliderComponent from "./SliderComponent/SliderComponent";

export default function Home() {
  return (
    <div
      className={` `}
    >
      <SliderComponent />
      <div className="w-full px-4 md:px-8">
        <div className="our-clients">
          <div className="w-full">
            <h1 className="text-2xl md:text-4xl font-bold mt-5 text-center">
              Our Clients
            </h1>
            <p className="text-base md:text-lg text-center mt-2">
              We have been working with some Fortune 500+ clients
            </p>
            <div className="w-full flex justify-center mt-4">
              <img
                className="max-w-full h-auto"
                src="./images/clientslogos.svg"
                alt="clientslogos"
              />
            </div>
          </div>
        </div>
      </div>
      <ManageYourEntireCommunity />

      <HelpingPage />
      <CustomerSection />
      <CommunityUpdateSection />
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
    </div>
  );
}
