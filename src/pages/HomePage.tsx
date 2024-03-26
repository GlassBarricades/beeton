import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
import CatalogZoomSection from "../components/sections/CatalogZoomSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
// import VideoSection from "../components/sections/VideoSection";

const mockdata: any = [
	{
	  title: "Top 10 places to visit in Norway this summer",
	  image:
		"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "August 18, 2022",
	},
	{
	  title: "Best forests to visit in North America",
	  image:
		"https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "August 27, 2022",
	},
	{
	  title: "Hawaii beaches review: better than you think",
	  image:
		"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "September 9, 2022",
	},
	{
	  title: "Mountains at night: 12 best locations to enjoy the view",
	  image:
		"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "September 12, 2022",
	},
	{
	  title: "Top 10 places to visit in Norway this summer",
	  image:
		"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "August 18, 2022",
	},
	{
	  title: "Best forests to visit in North America",
	  image:
		"https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "August 27, 2022",
	},
	{
	  title: "Hawaii beaches review: better than you think",
	  image:
		"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "September 9, 2022",
	},
	{
	  title: "Mountains at night: 12 best locations to enjoy the view",
	  image:
		"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
	  date: "September 12, 2022",
	},
  ];

const HomePage = () => {
    return (
			<>
				<HeroSection />
				<CatalogSection />
				<CatalogZoomSection />
				<CatalogGrid data={mockdata}/>
				<VideoCarouselSectiont />
				{/* <VideoSection /> */}
				<FooterSection />
			</>
		)
}
export default HomePage;