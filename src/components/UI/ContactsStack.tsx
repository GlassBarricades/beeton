import { Anchor, Stack, useMantineColorScheme } from '@mantine/core'
import { useAppSelector } from '../../hooks'

interface ContactsStackProps {
    align?: 'flex-start' | 'center' | 'flex-end'
}

const ContactsStack = ({ align = 'flex-end' }: ContactsStackProps) => {
	const settings = useAppSelector(state => state.settings.settings)
	const { colorScheme } = useMantineColorScheme()
	return (
		<Stack align={align} gap='xs' justify='flex-start'>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
				component='a'
				href={`tel:${settings.phone}`}
				underline='hover'
			>
				{`Телефон: ${settings.phone}`}
			</Anchor>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
                target='_blank'
				component='a'
				href={settings.adressLink}
				underline='hover'
			>
				{`Адрес мастерской: ${settings.adress}`}
			</Anchor>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
				component='a'
				href={`mailto:${settings.email}`}
				underline='hover'
			>
				{`E-mail: ${settings.email}`}
			</Anchor>
		</Stack>
	)
}
export default ContactsStack
