import CatalogSection from "../components/sections/CatalogSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import PartnersSection from "../components/sections/PartnersSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
import ScrollToTop from "../helpers/ScrollToTop";

interface IHomeProps {
  image: string
  textHero: string

}

const HomePage = ({image, textHero}: IHomeProps) => {
  return (
    <>
    <ScrollToTop />
      <HeroSection image={image} text={textHero}/>
      <CatalogSection />
      <VideoCarouselSectiont />
      <PartnersSection />
      <FooterSection />
    </>
  );
};
export default HomePage;
