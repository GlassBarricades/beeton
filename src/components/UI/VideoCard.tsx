import { Card, Image, Text, Group } from '@mantine/core';
import classes from './VideoCard.module.css';

const VideoCard = () => {
  return (
    <Card className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={80}
        />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            Видео
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            Репортаж Onliner.By
          </Text>
        </div>
      </Group>
    </Card>
  );
}
export default VideoCard;