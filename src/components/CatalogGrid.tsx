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

interface ICatalogGridProps {
  data: ICatalogItem[];
}
interface ICatalogItem {
  category?: string
  description?: string
  imageArr?: string[]
  link: string
  name?: string
  position: number
  price?: string
  uuid: string
  visible: boolean
}

const CatalogGrid = ({ data }: ICatalogGridProps) => {
  
  const cards = data.map((article: ICatalogItem, indx) => {
    console.log(article)
    return (
      <Card
        key={indx}
        component={Link}
        radius={0}
        p={0}
        to={
          article.category
            ? `catalog/${article.category}/${article.link}`
            : article.link
        }
        className={classes.card}
      >
        <AspectRatio ratio={3 / 3}>
          <Image
            src={
              article.imageArr
                ? article.imageArr[0]
                : "https://irl.by/wp-content/uploads/2017/08/52_nc7DbtMU.jpg"
            }
          />
        </AspectRatio>
        <Group p="md" justify="space-between">
          <Text className={classes.title}>{article.name}</Text>
          <Text size="md" fw={700}>
            {article.price} руб.
          </Text>
        </Group>
      </Card>
    );
  });

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
