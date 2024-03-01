import { Container, Tabs } from "@mantine/core";
import classes from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <Container mt="xl">
      <Tabs defaultValue="gallery" orientation="vertical" placement="right" classNames={{list: classes.list}}>
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default VideoSection;
