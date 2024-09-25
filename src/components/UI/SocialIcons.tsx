import { ActionIcon } from "@mantine/core";
import { BrandTelegram, BrandInstagram, Message } from 'tabler-icons-react'
import { useAppSelector } from "../../hooks";

const SocialIcons = () => {
	const settings = useAppSelector(state => state.settings.settings)
	console.log(settings)
    return (
			<ActionIcon.Group>
				<ActionIcon
					component='a'
					href={settings.telegram}
					target='_blank'
					variant='default'
					size='lg'
					aria-label='Settings'
				>
					<BrandTelegram style={{ width: '70%', height: '70%' }} />
				</ActionIcon>
				<ActionIcon
					component='a'
					href={settings.instagram}
					target='_blank'
					variant='default'
					size='lg'
					aria-label='Settings'
				>
					<BrandInstagram style={{ width: '70%', height: '70%' }} />
				</ActionIcon>
				<ActionIcon
					component='a'
					href={settings.viber}
					target='_blank'
					variant='default'
					size='lg'
					aria-label='Settings'
				>
					<Message style={{ width: '70%', height: '70%' }} />
				</ActionIcon>
			</ActionIcon.Group>
		)
}
export default SocialIcons;