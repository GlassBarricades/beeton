import CatalogSection from "../components/sections/CatalogSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import PartnersSection from "../components/sections/PartnersSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";

interface IHomeProps {
  image: string
  textHero: string

}

const HomePage = ({image, textHero}: IHomeProps) => {
  return (
    <>
      <HeroSection image={image} text={textHero}/>
      <CatalogSection />
      <VideoCarouselSectiont />
      <PartnersSection />
      <FooterSection />
    </>
  );
};
export default HomePage;
