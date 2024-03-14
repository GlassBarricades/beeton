import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
import CatalogZoomSection from "../components/sections/CatalogZoomSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
// import VideoSection from "../components/sections/VideoSection";

const HomePage = () => {
    return (
			<>
				<HeroSection />
				<CatalogSection />
				<CatalogZoomSection />
				<CatalogGrid />
				<VideoCarouselSectiont />
				{/* <VideoSection /> */}
				<FooterSection />
			</>
		)
}
export default HomePage;