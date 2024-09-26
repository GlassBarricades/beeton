import AboutPhotoSection from '../components/sections/AboutPhotoSection'
import FooterSection from '../components/sections/FooterSection'
import ScrollToTop from '../helpers/ScrollToTop'
import useFetchDataOne from '../hooks/useFetchDataOne'

const ForDesignersPage = () => {
	const [image, imageLoading] = useFetchDataOne('/for-designers-image/image')
	const [text, textLoading] = useFetchDataOne('/for-designers-text/text')
	return (
		<>
			<ScrollToTop />
			<AboutPhotoSection
				image={image.image}
				imgL={imageLoading}
				text={text.text}
				txtL={textLoading}
			/>
			<FooterSection />
		</>
	)
}
export default ForDesignersPage
