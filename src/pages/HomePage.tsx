import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
import HeroSection from "../components/sections/HeroSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
// import VideoSection from "../components/sections/VideoSection";

const HomePage = () => {
    return (
			<>
				<HeroSection />
				<CatalogSection />
				<CatalogGrid />
				<VideoCarouselSectiont />
				{/* <VideoSection /> */}
			</>
		)
}
export default HomePage;