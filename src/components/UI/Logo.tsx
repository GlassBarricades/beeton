import { Image, useMantineColorScheme } from '@mantine/core'
import { useAppSelector } from '../../hooks'

interface ILogoProps {
	variant: string
}

const Logo = ({ variant }: ILogoProps) => {
	const settings = useAppSelector(state => state.settings.settings)
	const { colorScheme } = useMantineColorScheme()
	return (
		<>
			{colorScheme === 'light' ? (
				<Image
					h={variant === 'hero' ? undefined : 60}
					src={settings.logo}
					alt='logo'
				/>
			) : (
				<Image
					h={variant === 'hero' ? undefined : 60}
					src={settings.logoDarkTheme}
					alt='logo'
				/>
			)}
		</>
	)
}
export default Logo
