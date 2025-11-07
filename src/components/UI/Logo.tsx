import { Image, useMantineColorScheme } from '@mantine/core'
import { useAppSelector } from '../../hooks'
import { Link } from 'react-router-dom'

interface ILogoProps {
	variant: string
}

const Logo = ({ variant }: ILogoProps) => {
	const settings = useAppSelector(state => state.settings.settings)
	const { colorScheme } = useMantineColorScheme()
	const isHero = variant === 'hero'
	return (
		<Link to='/' style={{ display: 'inline-flex', justifyContent: 'center' }}>
			{colorScheme === 'light' ? (
				<Image
					h={isHero ? undefined : 60}
					maw={isHero ? 320 : undefined}
					w={isHero ? '80%' : undefined}
					fit={isHero ? 'contain' : undefined}
					src={settings.logo}
					alt='logo'
				/>
			) : (
				<Image
					h={isHero ? undefined : 60}
					maw={isHero ? 320 : undefined}
					w={isHero ? '80%' : undefined}
					fit={isHero ? 'contain' : undefined}
					src={settings.logoDarkTheme}
					alt='logo'
				/>
			)}
		</Link>
	)
}
export default Logo
