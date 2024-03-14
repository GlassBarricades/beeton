import { ActionIcon } from "@mantine/core";
import { BrandTelegram, BrandInstagram, Message } from 'tabler-icons-react'

const SocialIcons = () => {
    return (
			<ActionIcon.Group>
				<ActionIcon
					component='a'
					href='https://t.me/hannamatis'
					target='_blank'
					variant='default'
					size='lg'
					aria-label='Settings'
				>
					<BrandTelegram style={{ width: '70%', height: '70%' }} />
				</ActionIcon>
				<ActionIcon
					component='a'
					href='https://www.instagram.com/beeton.by?igsh=MTBud3NhaXZseDhwbg%3D%3D&utm_source=qr'
					target='_blank'
					variant='default'
					size='lg'
					aria-label='Settings'
				>
					<BrandInstagram style={{ width: '70%', height: '70%' }} />
				</ActionIcon>
				<ActionIcon
					component='a'
					href='viber://chat?number=%2B375292747442'
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