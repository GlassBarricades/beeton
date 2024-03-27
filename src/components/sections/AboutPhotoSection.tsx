import {
  Center,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from './AboutPhotoSection.module.css'

const AboutPhotoSection = () => {
  return (
    <Container fluid>
      <SimpleGrid cols={{ base: 1, md: 2 }} mt="xl">
        <div className={classes.imageWrap}>
          <Image src="https://www.pravilamag.ru/upload/img_cache/652/65234820e716d5e5d0159ac9bccc8314_ce_1622x1080x148x0.jpg" />
        </div>
        <Center>
          <Stack className={classes.textWrap} ml="md">
            <Title order={2}>
              Lorem ipsum dolor sit amet.
            </Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero, aut saepe doloribus quaerat officiis rem! Illo numquam
              dolores harum. Dolorem, mollitia similique? Accusamus tempora
              facere minima dolores quas ad nemo saepe quisquam totam ipsum
              illo, dolore laborum omnis porro magnam distinctio ratione odit
              amet? A quia ex maxime amet.
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              vero, aut saepe doloribus quaerat officiis rem! Illo numquam
              dolores harum. Dolorem, mollitia similique? Accusamus tempora
              facere minima dolores quas ad nemo saepe quisquam totam ipsum
              illo, dolore laborum omnis porro magnam distinctio ratione odit
              amet? A quia ex maxime amet.
            </Text>
          </Stack>
        </Center>
      </SimpleGrid>
    </Container>
  );
};
export default AboutPhotoSection;
