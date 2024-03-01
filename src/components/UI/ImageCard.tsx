import { Card, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import classes from './ImageCard.module.css'

export function ImageCard(props: any) {

	return (
		<Card
			p='lg'
			shadow='lg'
			className={classes.card}
			component={Link}
			to={`catalog/${props.link}`}
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
					<Text className={classes.title} fw={500}>
						{props.title}
					</Text>
				</div>
			</div>
		</Card>
	)
}
