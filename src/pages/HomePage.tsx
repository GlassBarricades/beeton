import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
// import CatalogZoomSection from "../components/sections/CatalogZoomSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import useFetchSortedData from "../hooks/useFetchSortedData";
// import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
// import VideoSection from "../components/sections/VideoSection";

interface IHomeCategoryItem {
	delivery: boolean
	description?: string
	image?: string
	link: string
	name?: string
	position: number
	uuid: string
	visible: boolean
	products?: ICatalogItem[] 
}

interface ICatalogItem {
	category?: string
	description?: string
	imageArr?: string[]
	link: string
	name?: string
	position: number
	price?: string
	uuid: string
	visible: boolean
  }

const HomePage = () => {
  const [catalog, loading] = useFetchSortedData({
    url: "/catalog",
    field: "position",
  });

  console.log(loading)

  const fullCatalog = catalog
    .map((item: IHomeCategoryItem) => {
		console.log(item)
      if (item.products != undefined) {
        const obj: ICatalogItem[] = Object.values(item.products);
		const objM: ICatalogItem[] = obj.map((token: ICatalogItem) => {
			return {category: item.link, ...token}
		})
        return objM;
      } else {
        return undefined;
      }
    })
    .filter((item: ICatalogItem) => {
      return item != undefined;
    })
    .flat();

	console.log(fullCatalog)

  return (
    <>
      <HeroSection />
      <CatalogSection />
      {/* <CatalogZoomSection /> */}
      <CatalogGrid data={fullCatalog} />
      {/* <VideoCarouselSectiont /> */}
      {/* <VideoSection /> */}
      <FooterSection />
    </>
  );
};
export default HomePage;
