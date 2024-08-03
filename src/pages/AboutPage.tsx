import AboutPhotoSection from "../components/sections/AboutPhotoSection";
import FooterSection from "../components/sections/FooterSection";
import PartnersSection from "../components/sections/PartnersSection";
import VideoCarouselSectiont from "../components/sections/VideoCarouselSection";
import useFetchDataOne from "../hooks/useFetchDataOne";

const AboutPage = () => {
    const [image, imageLoading] = useFetchDataOne("/about-image/image");
    const [text, textLoading] = useFetchDataOne("/about-text/text");
    return (
        <>
        <AboutPhotoSection image={image.image} imgL={imageLoading} text={text.text} txtL={textLoading}/>
        <VideoCarouselSectiont />
        <PartnersSection />
        <FooterSection />
        </>
    )
}
export default AboutPage;