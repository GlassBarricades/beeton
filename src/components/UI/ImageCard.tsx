import { Card, Text } from '@mantine/core'
import classes from './ImageCard.module.css'

export function ImageCard(props) {

	return (
		<Card
			p='lg'
			shadow='lg'
			className={classes.card}
			radius='md'
			component='a'
			href='https://mantine.dev/'
			target='_blank'
		>
			<div
				className={classes.image}
				style={{
					backgroundImage:
						`url(${props.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
				}}
			/>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<div>
					<Text size='lg' className={classes.title} fw={500}>
						{props.title}
					</Text>
				</div>
			</div>
		</Card>
	)
}
