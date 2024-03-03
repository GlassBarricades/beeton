import { AspectRatio, Container, ScrollArea, Tabs} from "@mantine/core";
import classes from "./VideoSection.module.css";
import VideoCard from "../UI/VideoCard";

const VideoSection = () => {
  return (
    <Container mt="xl" size="xl" mb="xl">
      <Tabs variant="pills" color="gray" defaultValue="gallery" orientation="vertical" placement="right" classNames={{list: classes.list, tabLabel: classes.tabLabel}}>
        <Tabs.List>
          <ScrollArea h={350} miw={"100%"}>
          <Tabs.Tab value="gallery"><VideoCard /></Tabs.Tab>
          <Tabs.Tab value="messages"><VideoCard /></Tabs.Tab>
          <Tabs.Tab value="settings"><VideoCard /></Tabs.Tab>
          </ScrollArea>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
        </Tabs.Panel>
        <Tabs.Panel value="messages">
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default VideoSection;
