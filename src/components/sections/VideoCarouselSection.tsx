import { Carousel } from "@mantine/carousel";
import { AspectRatio, Card, Container, Image, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import YouTube, { YouTubeProps } from "react-youtube";
import classes from "./VideoCarouselSectiont.module.css";
import useFetchSortedData from "../../hooks/useFetchSortedData";

const VideoCarouselSectiont = () => {
  const [video, loading] = useFetchSortedData({
    url: "/video",
    field: "position",
  });
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  console.log(loading)

  const opts: YouTubeProps["opts"] = {
    // height: '390',
    // width: '640',
    playerVars: {
      // autoplay: 1,
    },
  };

  return (
    <Container fluid mb="xl" mt="xl">
      <Title order={2} mb="xl" ta="center">О нас в СМИ</Title>
      <Carousel
        withIndicators
        height={400}
        slideSize={{ base: "100%", xs: "50%", lg: "25%" }}
        slideGap="xl"
        loop
        align="start"
        slidesToScroll={1}
      >
        {video.map((item: any) => {
          return (
            <Carousel.Slide key={item.link}>
              <Card
                padding="xl"
                component="a"
                className={classes.card}
                radius={0}
                onClick={() => {
                  modals.open({
                    title: item.name,
                    centered: true,
                    size: "xl",
                    children: (
                      <>
                        <AspectRatio ratio={16 / 9}>
                          <YouTube
                            videoId={item.link}
                            opts={opts}
                            onReady={onPlayerReady}
                          />
                        </AspectRatio>
                      </>
                    ),
                  });
                }}
              >
                <Card.Section>
                  <Image src={item.image} h={250} alt="No way!" />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                  {item.name}
                </Text>
              </Card>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Container>
  );
};
export default VideoCarouselSectiont;
