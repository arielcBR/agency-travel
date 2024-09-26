import { HomeContainer } from "./styles";
import { HeroSection } from "../../components/HeroSection";
import { AboutUs } from "../../components/AboutUs";
import { OurServices } from "../../components/OurServices";
import { AgencyInfo } from "../../components/AgencyInfo";
import { OurStaff } from "../../components/OurStaff";
import { Gallery } from "../../components/Gallery";
import { WhatsappButton } from "../../components/WhatsappButton";
import { useEffect, useState } from "react";

export function Home() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const thresholdButton = 0.05;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight * thresholdButton) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HomeContainer>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <AgencyInfo />
      <Gallery />
      <OurStaff />
      {isButtonVisible && <WhatsappButton />}
    </HomeContainer>
  );
}
