import { AspectRatio, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./CatalogCard.module.css";

interface ICatalogItem {
    category?: string
    description?: string
    firstImg: string
    imageArr?: string[]
    link: string
    name?: string
    position: number
    price?: string
    uuid: string
    visible: boolean
  }

interface ICatalogCardProps {
  item: ICatalogItem
}

const CatalogCard = ({ item }: ICatalogCardProps) => {
  return (
    <Card
      component={Link}
      radius={0}
      p={0}
      to={item.category ? `${item.category}/${item.link}` : item.link}
    >
      <AspectRatio ratio={3 / 3}>
        <Image
          src={
            item.firstImg
              ? item.firstImg
              : "https://irl.by/wp-content/uploads/2017/08/52_nc7DbtMU.jpg"
          }
        />
      </AspectRatio>
      <Group p="md" justify="space-between">
        <Text className={classes.title}>{item.name}</Text>
      </Group>
    </Card>
  );
};
export default CatalogCard;
