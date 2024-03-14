import { Anchor, Stack, useMantineColorScheme } from '@mantine/core'

const ContactsStack = () => {
	const { colorScheme } = useMantineColorScheme()
	return (
		<Stack align='flex-end' gap='xs' justify='flex-start'>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
				component='a'
				href='tel:+375292747442'
				underline='hover'
			>
				Телефон: +375292747442
			</Anchor>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
                target='_blank'
				component='a'
				href='https://yandex.by/maps/-/CDFs7IOz'
				underline='hover'
			>
				Адрес мастерской: город Минск, ул. Казинца 42/6
			</Anchor>
			<Anchor
				inline
				c={colorScheme === 'dark' ? 'gray' : 'black'}
				component='a'
				href='mailto:beetonminsk@gmail.com'
				underline='hover'
			>
				E-mail: beetonminsk@gmail.com
			</Anchor>
		</Stack>
	)
}
export default ContactsStack
