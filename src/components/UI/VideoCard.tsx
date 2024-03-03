import { Card, Image, Text, Group } from '@mantine/core';
import classes from './VideoCard.module.css';

const VideoCard = () => {
  return (
		<Card className={classes.card}>
			<Group wrap='nowrap' gap={0}>
				<Image src='https://i.ibb.co/YLYZF0T/Screenshot-2.png' height={80} />
				<div className={classes.body}>
					<Text tt='uppercase' c='dimmed' fw={700} size='xs'>
						Видео Телеканал Беларусь 24
					</Text>
					<Text className={classes.title} mt='xs' mb='md'>
						Семья мастеров изделий из бетона и гипса о первых шагах, сложностях,
						забавных историях на своём пути
					</Text>
				</div>
			</Group>
		</Card>
	)
}
export default VideoCard;