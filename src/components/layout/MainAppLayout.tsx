import { AppShell, Burger, Group, Image, UnstyledButton, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './MainAppLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom'
import { ThemeChange } from '../UI/ThemeChange'

const MainAppLayout = () => {
	const {colorScheme} = useMantineColorScheme()
	const [opened, { toggle, close }] = useDisclosure()

	console.log(colorScheme)

    const links = [
			{ title: 'Главная', link: '/' },
			{ title: 'О нас', link: '/about' },
			{ title: 'Каталог', link: '/catalog' },
			{ title: 'Контакты', link: '/contacts' },
		]

    const linksItems = links.map(item => {
        return <UnstyledButton key={item.link} onClick={close} to={item.link} component={NavLink} className={classes.control}>{item.title}</UnstyledButton>
    })

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { desktop: true, mobile: !opened },
			}}
			// padding="xs"
		>
			<AppShell.Header>
				<Group h='100%' px='md'>
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
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
				{linksItems}
				<ThemeChange />
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}
export default MainAppLayout;