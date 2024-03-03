import { Card, Image, Text, Group } from '@mantine/core';
import classes from './VideoCard.module.css';

type Props = {
	image: String,
	title: String,
	subTitle: String
}

const VideoCard = ({image, title, subTitle}: Props) => {
  return (
		<Card className={classes.card}>
			<Group wrap='nowrap' gap={0}>
				<Image src={image} height={80} />
				<div className={classes.body}>
					<Text tt='uppercase' c='dimmed' fw={700} size='xs'>
						{subTitle}
					</Text>
					<Text className={classes.title} mt='xs' mb='md'>
						{title}
					</Text>
				</div>
			</Group>
		</Card>
	)
}
export default VideoCard;