import { Carousel } from "@mantine/carousel";
import { AspectRatio, Card, Container, Image, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

const dataVideo = [
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
  {
    name: "Название видео",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://i.ibb.co/YLYZF0T/Screenshot-2.png",
  },
];

const VideoCarouselSectiont = () => {
  return (
    <Container fluid>
      <Carousel
        withIndicators
        height={320}
        slideSize={{ base: "100%", xs: "50%", lg: "25%" }}
        slideGap="xl"
        loop
        align="start"
        slidesToScroll={4}
      >
        {dataVideo.map((item) => {
          return (
            <Carousel.Slide>
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                onClick={() => {
                  modals.open({
                    title: item.name,
                    centered: true,
                    children: (
                      <>
                        <AspectRatio ratio={16 / 9}>
                          <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=eHXq6VxMoDzgt07F"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
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
