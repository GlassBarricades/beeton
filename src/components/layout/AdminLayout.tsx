import {
	AppShell,
	Burger,
	Group,
	Image,
	UnstyledButton,
	useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './AdminLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom'
import { ThemeChange } from '../UI/ThemeChange'
import useFetchSortedData from '../../hooks/useFetchSortedData'

const AdminLayout = () => {
	const { colorScheme } = useMantineColorScheme()
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
	const [categories] = useFetchSortedData(
		{ url: '/catalog', field: 'position' },

	)

	const linksItemsMain = categories.map((item: any) => {
		return <UnstyledButton key={item.link} to={item.link} component={NavLink} className={classes.control}>{item.name}</UnstyledButton>
	})

	const links = [
		{ title: '<Вернуться на сайт', link: '/' },
	]

	const linksItems = links.map(item => {
		return (
			<UnstyledButton
				key={item.link}
				onClick={close}
				to={item.link}
				component={NavLink}
				className={classes.control}
			>
				{item.title}
			</UnstyledButton>
		)
	})

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
		>
			<AppShell.Header>
				<Group h='100%' px='md'>
					<Burger
						opened={mobileOpened}
						onClick={toggleMobile}
						hiddenFrom='sm'
						size='sm'
					/>
					<Burger
						opened={desktopOpened}
						onClick={toggleDesktop}
						visibleFrom='sm'
						size='sm'
					/>
					<Group justify='space-between' style={{ flex: 1 }}>
						{colorScheme === 'light' ? (
							<Image
								h={40}
								src='https://i.ibb.co/Gv6ZYDZ/loggo.png'
								alt='logo'
							/>
						) : (
							<Image
								h={40}
								src='https://i.ibb.co/Bnjht4q/loggo-negate.png'
								alt='logo'
							/>
						)}
						<Group ml='xl' gap={0} visibleFrom='sm'>
							{linksItems}
							<ThemeChange />
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar py='md' px={4}>
				<UnstyledButton
					to='/admin/mainsettings'
					component={NavLink}
					className={classes.control}
				>
					Основные настройки
				</UnstyledButton>
				<UnstyledButton
					to='/admin/about'
					component={NavLink}
					className={classes.control}
				>
					О нас
				</UnstyledButton>
				<UnstyledButton
					to='/admin/for-designers'
					component={NavLink}
					className={classes.control}
				>
					Для дизайнеров
				</UnstyledButton>
				<UnstyledButton
					to='/admin/category'
					component={NavLink}
					className={classes.control}
				>
					Категории
				</UnstyledButton>
				<UnstyledButton
					to='/admin/info'
					component={NavLink}
					className={classes.control}
				>
					Информация
				</UnstyledButton>
				<UnstyledButton
					to='/admin/partners'
					component={NavLink}
					className={classes.control}
				>
					Партнёры
				</UnstyledButton>
				<UnstyledButton
					to='/admin/video'
					component={NavLink}
					className={classes.control}
				>
					Видео
				</UnstyledButton>
				{linksItemsMain}
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}
export default AdminLayout
