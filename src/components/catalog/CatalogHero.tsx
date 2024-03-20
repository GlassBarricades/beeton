import { BackgroundImage, Box, Center, Title } from "@mantine/core";

interface IProps {
    name: string
    image: string
}

const CatalogHero = ({name, image}: IProps) => {
    return (
        <Box mih={"40vh"} mx="auto">
      <BackgroundImage mih={"40vh"} src={image} radius={0}>
        <Center p="md" mih={"40vh"}>
          <Title c="white">{name}</Title>
        </Center>
      </BackgroundImage>
    </Box>
    )
}
export default CatalogHero;