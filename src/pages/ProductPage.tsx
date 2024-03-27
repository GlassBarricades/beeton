import { Carousel } from "@mantine/carousel";
import { Container, Grid, Image, Title } from "@mantine/core";
import { child, get, getDatabase, ref } from "firebase/database";
import { useLoaderData } from "react-router-dom";

interface ILoaderData {
  productDataBase: any;
  category: string;
  product: string;
}

const ProductPage = () => {
  const { productDataBase, category, product } = useLoaderData() as ILoaderData;
  console.log(category)
  console.log(product)
  console.log(productDataBase);

  const slides = productDataBase.imageArr.map((item: string, index: any) => {
    return (
      <Carousel.Slide key={index}>
        <Image src={item} fit="contain"/>
      </Carousel.Slide>
    );
  });

  return (
    <Container size="xl">
      <Grid mt="xl">
        <Grid.Col span={{base: 12, md: 6}} order={{ base: 2, md: 1 }} style={{ maxHeight: 800, display: 'flex' }}>
          <Carousel dragFree loop withIndicators height="100%" style={{ flex: 1 }}>
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

  return { productDataBase, category, product };
};
export { ProductPage, productLoader };
