import Image from "next/image";
import ManageYourEntireCommunity from "./ManageYourEntireCommunity/ManageYourEntireCommunity";
import HelpingPage from "./Helping/HelpingPage";
import CustomerSection from "./CustomerSection/CustomerSection";
import CommunityUpdateSection from "./CommunityUpdateSection/CommunityUpdateSection";
import SliderComponent from "./SliderComponent/SliderComponent";
import OurClients from "./ourClients/OurClients";
import GetDemo from "./GetDemo/GetDemo";

export default function Home() {
  return (
    <>
      <SliderComponent />
      <div className="container">
        <OurClients/>
        <ManageYourEntireCommunity />
        <HelpingPage />
        <CustomerSection />
        <CommunityUpdateSection />
        <GetDemo />
      </div>
    </>
  );
}
