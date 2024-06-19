import { Carousel } from "@mantine/carousel";
import { Container, Grid, Image, Title } from "@mantine/core";
import { child, get, getDatabase, ref } from "firebase/database";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";

interface ILoaderData {
  productDataBase: any;
}

const ProductPage = () => {
  const { productDataBase } = useLoaderData() as ILoaderData;

  const slides = productDataBase.imageArr.map((item: string, index: string) => {
    return (
				<Carousel.Slide key={index}>
					<Image src={item} fit='cover' />
				</Carousel.Slide>
		)
  });

  return (
    <>
    <ScrollToTop />
    <Container size="xl">
      <Grid mt="xl">
        <Grid.Col span={{base: 12, md: 6}} order={{ base: 2, md: 1 }} style={{ maxHeight: 800, display: 'flex' }}>
          <Carousel dragFree loop withIndicators height="100%" w={"100%"} style={{ flex: 1 }}>
          <Carousel.Slide>
					<Image src={productDataBase.firstImg} fit='cover' />
				</Carousel.Slide>
            {slides}
          </Carousel>
        </Grid.Col>
        <Grid.Col span={{base: 12, md: 6}} order={{ base: 1, md: 2 }}>
          <Title order={3}>{productDataBase.name}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: productDataBase.description }}
          ></div>
        </Grid.Col>
      </Grid>
    </Container>
    </>
  );
};

const productLoader = async ({ params }: any) => {
  const category = params.category;
  const product = params.product;
  const dbRef = ref(getDatabase());
  let productDataBase;
  await get(child(dbRef, `catalog/${category}/products/${product}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        console.log("No data available");
      }
    })
    .then((data) => {
      productDataBase = data;
    })
    .catch((error) => {
      console.error(error);
    });

  return { productDataBase };
};
export { ProductPage, productLoader };
