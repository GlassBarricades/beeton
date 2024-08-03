import { Container, Image, Paper, SimpleGrid } from "@mantine/core";
import useFetchDataOne from "../../hooks/useFetchDataOne";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import classes from "./PartnersSection.module.css";

const PartnersSection = () => {
  const [partners, loading] = useFetchSortedData({
    url: "/partners",
    field: "position",
  });
  const [data, loadingData] = useFetchDataOne("/partners-text/text");
  console.log(loading);
  console.log(loadingData);
  return (
    <Container fluid py="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <SimpleGrid
          cols={{ base: 2, md: 4 }}
          spacing={0}
          verticalSpacing={0}
        >
          {partners.map((item: any, indx: any) => {
            return (
              <Paper radius={0} className={classes.itemWrap} key={indx}>
                <Image src={item.image} maw={150} mah={150} />
              </Paper>
            );
          })}
        </SimpleGrid>
        <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      </SimpleGrid>
    </Container>
  );
};
export default PartnersSection;
