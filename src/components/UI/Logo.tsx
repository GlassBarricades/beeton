import { Image, useMantineColorScheme } from '@mantine/core'
import { useAppSelector } from '../../hooks'

const Logo = () => {
	const settings = useAppSelector(state => state.settings.settings)
	const { colorScheme } = useMantineColorScheme()
	return (
		<>
			{colorScheme === 'light' ? (
				<Image h={40} src={settings.logo} alt='logo' />
			) : (
				<Image
					h={40}
					src={settings.logoDarkTheme}
					alt='logo'
				/>
			)}
		</>
	)
}
export default Logo
