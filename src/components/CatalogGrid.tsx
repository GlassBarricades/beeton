import { SimpleGrid, Container } from "@mantine/core";
import CatalogCard from "./UI/CatalogCard";

interface ICatalogGridProps {
  data: ICatalogItem[];
}
interface ICatalogItem {
  category?: string;
  description?: string;
  firstImg: string;
  imageArr?: string[];
  link: string;
  name?: string;
  position: number;
  price?: string;
  uuid: string;
  visible: boolean;
}

const CatalogGrid = ({ data }: ICatalogGridProps) => {
  const cards = data.map((item: ICatalogItem, indx) => {
    return (
      <CatalogCard key={indx} item={item} />
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
