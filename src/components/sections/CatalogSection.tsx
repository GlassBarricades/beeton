import { Container, SimpleGrid } from "@mantine/core";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import ImageCard from "../UI/ImageCard";

const CatalogSection = () => {
  const [categories] = useFetchSortedData(
		{ url: '/catalog', field: 'position' },
	)

  const items = categories.map((item: any) => {
    return (
      <ImageCard
        key={item.link}
        link={item.link}
        image={item.image}
        title={item.name}
      />
    );
  });

  return (
    <Container my="md" mt="xl" fluid mih={500}>
      <SimpleGrid
        cols={{ base: 2, lg: 4 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};
export default CatalogSection;
