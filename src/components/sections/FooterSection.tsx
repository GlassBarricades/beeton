import {
	Anchor,
	Container,
	Group,
	SimpleGrid,
	useMantineColorScheme,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import {
	Truck,
	Printer,
	CameraSelfie,
	BuildingStore,
	Cash,
} from 'tabler-icons-react'
import Logo from '../UI/Logo'
import SocialIcons from '../UI/SocialIcons'
import ContactsStack from '../UI/ContactsStack'

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

const data = [
	{
		icon: Truck,
		title: 'Доставка',
		value: 'Truck',
		content:
			'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
	},
	{
		icon: Printer,
		title: 'Изделия на заказ',
		value: 'Printer',
		content:
			'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
	},
	{
		icon: CameraSelfie,
		title: 'Уход',
		value: 'CameraSelfie',
		content:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
	{
		icon: BuildingStore,
		title: 'Шоурум',
		value: 'showroom',
		content:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
	{
		icon: Cash,
		title: 'Оплата',
		value: 'cash',
		content:
			'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
	},
]

const FooterSection = () => {
    const {colorScheme} = useMantineColorScheme()
	return (
		<Container fluid>
			<Group justify='space-between' mb='xl'>
				<Logo />
				<SocialIcons />
			</Group>
			<SimpleGrid cols={2}>
				<SimpleGrid cols={2}>
					<SimpleGrid cols={{ base: 1, md: 2 }} verticalSpacing='xs'>
						{CatalogData.map((item, indx) => {
							return (
								<Anchor
									c={colorScheme === 'dark' ? 'gray' : 'black'}
									key={indx}
									component={Link}
									to={`catalog/${item.link}`}
									underline='hover'
								>
									{item.title}
								</Anchor>
							)
						})}
					</SimpleGrid>
					<SimpleGrid cols={1} verticalSpacing='xs'>
						{data.map((item, indx) => {
							return (
								<Anchor
									inline
									c={colorScheme === 'dark' ? 'gray' : 'black'}
									key={indx}
									component={Link}
									to='/info'
									underline='hover'
								>
									{item.title}
								</Anchor>
							)
						})}
					</SimpleGrid>
				</SimpleGrid>
				<SimpleGrid>
                    <ContactsStack />
                </SimpleGrid>
			</SimpleGrid>
		</Container>
	)
}
export default FooterSection
