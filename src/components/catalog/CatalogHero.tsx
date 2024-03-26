import { BackgroundImage, Box, Center, Title } from "@mantine/core";
import classes from "./CatalogHero.module.css";

interface IProps {
  name: string;
  image: string;
}

const CatalogHero = ({ name, image }: IProps) => {
  return (
    <Box mih={"30vh"} mx="auto">
      <BackgroundImage mih={"30vh"} src={image} radius={0}>
        <Center p="md" mih={"30vh"}>
          <Title c="white" className={classes.title}>{name}</Title>
        </Center>
      </BackgroundImage>
    </Box>
  );
};
export default CatalogHero;
