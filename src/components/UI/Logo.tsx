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
		<Link to='/' style={{ display: 'inline-flex'}}>
			{colorScheme === 'light' ? (
				<Image
					h={isHero ? undefined : 60}
					maw={isHero ? 320 : 220}
					w={isHero ? '80%' : '70%'}
					fit={isHero ? 'contain' : 'contain'}
					src={settings.logo}
					alt='logo'
				/>
			) : (
				<Image
					h={isHero ? undefined : 60}
					maw={isHero ? 320 : 220}
					w={isHero ? '80%' : '70%'}
					fit={isHero ? 'contain' : 'contain'}
					src={settings.logoDarkTheme}
					alt='logo'
				/>
			)}
		</Link>
	)
}
export default Logo
