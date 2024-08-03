import {
  Center,
  Container,
  Image,
  Loader,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import classes from './AboutPhotoSection.module.css'

interface IAboutPhotoSectionProps {
  image: string
  text: string
  imgL: boolean
  txtL: boolean
}

const AboutPhotoSection = ({image, imgL, text, txtL}: IAboutPhotoSectionProps) => {
  return (
    <Container fluid>
      <SimpleGrid cols={{ base: 1, md: 2 }} mt="xl">
        <div className={classes.imageWrap}>
          {imgL ? <Loader color="blue" type="dots" /> : <Image src={image} />}
        </div>
        <Center>
          <Stack className={classes.textWrap} ml="md">
          {txtL ? <Loader color="blue" type="dots" /> : <div dangerouslySetInnerHTML={{ __html: text }}></div>}
          </Stack>
        </Center>
      </SimpleGrid>
    </Container>
  );
};
export default AboutPhotoSection;
