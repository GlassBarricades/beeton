import { Container, Grid, Image, Paper, SimpleGrid } from "@mantine/core";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import classes from "./PartnersSection.module.css"

const PartnersSection = () => {
  const [partners, loading] = useFetchSortedData({
    url: "/partners",
    field: "position",
  });
  console.log(partners);
  return (
    <Container fluid py="xl">
        <Grid className={classes.containerGrid}>
      {partners.map((item: any, indx: any) => {
        return (
            <Grid.Col span={{base: 6, md: 3}} className={classes.itemWrap}>
            <Image key={indx} src={item.image} maw={200}/>
          </Grid.Col>
        );
      })}
      </Grid>
    </Container>
  );
};
export default PartnersSection;
