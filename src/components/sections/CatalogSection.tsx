import { Container, SimpleGrid } from "@mantine/core";
import ImageCard from "../UI/ImageCard";

const CatalogSection = () => {

    const CatalogData = [
			{
				title: 'Столы',
				link: 'stoly',
				description: '',
				image:
					'https://1beton.info/wp-content/uploads/2020/01/stol-iz-betona-kak-sdelat.jpg',
			},
			{
				title: 'Кашпо большие',
				link: 'kashpo',
				description: '',
				image:
					'https://1beton.info/wp-content/uploads/2019/09/betonnye-kashpo-svoimi-rukami.jpg',
			},
			{
				title: 'Корпоративные подарки. Награды',
				link: 'podarki',
				description: '',
				image:
					'https://cs1.livemaster.ru/storage/e5/11/b10fa5a9e6d4efed574607f495m8--suveniry-i-podarki-korporativnye-podarki-na-23-e-fevralya-i-8.jpg',
			},
			{
				title: 'Вазы',
				link: 'vazi',
				description: '',
				image:
					'https://cs5.livemaster.ru/storage/02/b0/820a12963897014ca06f23d7ee7t--dlya-doma-i-interera-vaza-iz-betona.jpg',
			},
			{
				title: 'Декор из архитектурного бетона и гипса',
				link: 'dekor',
				description: '',
				image:
					'https://www.ua-bud.com.ua/wp-content/uploads/2020/08/dekor-beton1.jpg',
			},
			{
				title: 'Изделия для ресторана, кафе, гостиницы и дома',
				link: 'restorani',
				description: '',
				image:
					'https://n1s1.hsmedia.ru/97/4a/61/974a61450369f52d317c1fcbf90246c2/1880x1410_0xac120003_16391471871581585149.jpg',
			},
			{
				title: 'Индивидуальный проект. Под заказ',
				link: 'special',
				description: '',
				image: 'https://bet-on.by/assets/img/Umyvalniki/WB-604/primer_1.jpeg',
			},
			{
				title: 'Мастер-классы',
				link: 'masterclassi',
				description: '',
				image:
					'https://static-cdn4-2.vigbo.tech/u53172/89929/blog/5401184/4783322/62266630/1000-ASIYA_SHAMSHADINOVA-e3759f000d0c40c8afaeb0954e946f09.jpg',
			},
		]

    return (
			<Container my='md' mt='xl' fluid>
				<SimpleGrid
					cols={{ base: 2, lg: 4 }}
					spacing={{ base: 10, sm: 'xl' }}
					verticalSpacing={{ base: 'md', sm: 'xl' }}
				>
                    {CatalogData.map(item => {
                        return <ImageCard key={item.link} link={item.link} image={item.image} title={item.title} />
                    })}
				</SimpleGrid>
			</Container>
		)
}
export default CatalogSection;