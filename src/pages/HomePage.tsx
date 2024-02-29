import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
import HeroSection from "../components/sections/HeroSection";

const HomePage = () => {
    return (
			<>
				<HeroSection />
				<CatalogSection />
				<CatalogGrid />
			</>
		)
}
export default HomePage;