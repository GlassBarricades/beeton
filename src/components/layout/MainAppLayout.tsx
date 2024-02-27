import { AppShell, Burger, Group, Text, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './MainAppLayout.module.css'
import { Outlet, NavLink } from 'react-router-dom'

const MainAppLayout = () => {
	const [opened, { toggle, close }] = useDisclosure()

    const links = [
			{ title: 'Главная', link: '/' },
			{ title: 'О нас', link: '/about' },
			{ title: 'Каталог', link: '/catalog' },
			{ title: 'Контакты', link: '/contacts' },
		]

    const linksItems = links.map(item => {
        return <UnstyledButton onClick={close} to={item.link} component={NavLink} className={classes.control}>{item.title}</UnstyledButton>
    })

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding='md'
		>
			<AppShell.Header>
				<Group h='100%' px='md'>
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
					<Group justify='space-between' style={{ flex: 1 }}>
						<Text>logo</Text>
						<Group ml='xl' gap={0} visibleFrom='sm'>
							{linksItems}
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar py='md' px={4}>
				{linksItems}
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	)
}
export default MainAppLayout;