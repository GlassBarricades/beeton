import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Group,
} from "@mantine/core";
import classes from "./CatalogGrid.module.css";
import { Link } from "react-router-dom";

interface IProps {
  data: [];
}

const CatalogGrid = ({ data }: IProps) => {
  const cards = data.map((article: any, indx) => (
    <Card
      key={indx}
      component={Link}
      radius={0}
      p={0}
      to={article.link}
      className={classes.card}
    >
      <AspectRatio ratio={3 / 3}>
        <Image src={article.imageArr ? article.imageArr : article.image} />
      </AspectRatio>
      <Group p="md" justify="space-between">
        <Text className={classes.title}>{article.name}</Text>
        <Text size="md" fw={700}>
          {article.price} руб.
        </Text>
      </Group>
    </Card>
  ));

  return (
    <Container my="md" mt="xl" fluid>
      <SimpleGrid
        cols={{ base: 2, lg: 4 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
};
export default CatalogGrid;
