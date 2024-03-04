import { Carousel } from "@mantine/carousel";
import { AspectRatio, Card, Container, Image, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import YouTube, { YouTubeProps } from 'react-youtube';
import classes from './VideoCarouselSectiont.module.css'

const dataVideo = [
	{
		name: 'Интервью Телеканал Беларусь 24',
		link: 'vLMgEcPsZDc',
		image: 'https://i.ibb.co/Hq4Tdqf/maxresdefault.jpg',
	},
	{
		name: '"Наше Утро" ОНТ | 16.09.2023 |',
		link: 'rQwD01zEM2o',
		image: 'https://i.ibb.co/ZHKLkNs/maxresdefault-1.jpg',
	},
	{
		name: 'Квартирный вопрос. Мужской лофт',
		link: 'alhzDoAG0EU',
		image: 'https://i.ibb.co/kXk99pK/maxresdefault-2.jpg',
	},
	{
		name: 'Квартирный вопрос. Колор-блок',
		link: 'JpVKwka8VJU',
		image: 'https://i.ibb.co/b6FjWRk/maxresdefault-3.jpg',
	},
	{
		name: 'Квартирный вопрос. Арт-деко',
		link: 'C97yKdSSEbA',
		image: 'https://i.ibb.co/ss6QVBy/maxresdefault-4.jpg',
	},
	{
		name: 'Квартирный вопрос. Контрастная гостиная',
		link: 'BJdm_usO6EA',
		image: 'https://i.ibb.co/cJr9kKc/maxresdefault-5.jpg',
	},
	{
		name: 'Квартирный вопрос. П-образная панель',
		link: 'TP_YERgg8mg',
		image: 'https://i.ibb.co/kKRMdcD/maxresdefault-6.jpg',
	},
	{
		name: 'Маленькое дело: бетонная мастерская',
		link: 'lvT7cHWTNzs',
		image: 'https://i.ibb.co/5MzcQZ8/maxresdefault-7.jpg',
	},
]

const VideoCarouselSectiont = () => {
  const onPlayerReady: YouTubeProps['onReady'] = event => {
		event.target.pauseVideo()
	}

  const opts: YouTubeProps['opts'] = {
		// height: '390',
		// width: '640',
		playerVars: {
			// autoplay: 1,
		},
	}

  return (
    <Container fluid mb="xl" mt="xl">
      <Carousel
        withIndicators
        height={400}
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
									})
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
