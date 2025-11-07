import { child, get, getDatabase, ref } from "firebase/database";
import { useRouteLoaderData } from "react-router-dom";
import CatalogHero from "../components/catalog/CatalogHero";
import CatalogGrid from "../components/CatalogGrid";
import { Container } from "@mantine/core";
import ScrollToTop from "../helpers/ScrollToTop";

interface ILoaderData {
  dataBase: any;
}

const CategoryPage = () => {
  const loaderData = useRouteLoaderData("catalog-category") as ILoaderData | undefined;
  const dataBase = loaderData?.dataBase;
  const dataProducts: any = dataBase?.products ? Object.values(dataBase.products) : undefined;
  return (
    <>
    <ScrollToTop />
    <CatalogHero name={dataBase?.name} image={dataBase?.image}/>
    {dataBase?.products && !dataBase?.inside ? <CatalogGrid data={dataProducts}/> : <Container><div dangerouslySetInnerHTML={{ __html: dataBase?.content || "" }}></div></Container>}
    </>
  );
};

const categoryLoader = async ({ params }: any) => {
  const category: any = params.category;
  const dbRef = ref(getDatabase());
  let dataBase: any;
  await get(child(dbRef, `catalog/${category}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        console.log("No data available");
      }
    })
    .then((data) => {
      dataBase = data;
    })
    .catch((error) => {
      console.error(error);
    });

  return { dataBase };
};

export { CategoryPage, categoryLoader };
