import { Image, useMantineColorScheme } from '@mantine/core'

const Logo = () => {
	const { colorScheme } = useMantineColorScheme()
	return (
		<>
			{colorScheme === 'light' ? (
				<Image h={40} src='https://i.ibb.co/Gv6ZYDZ/loggo.png' alt='logo' />
			) : (
				<Image
					h={40}
					src='https://i.ibb.co/Bnjht4q/loggo-negate.png'
					alt='logo'
				/>
			)}
		</>
	)
}
export default Logo
