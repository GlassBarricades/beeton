import { child, get, getDatabase, ref } from "firebase/database";
import { useLoaderData } from "react-router-dom";
import CatalogHero from "../components/catalog/CatalogHero";
import CatalogGrid from "../components/CatalogGrid";

interface ILoaderData {
  dataBase: any;
}

const CategoryPage = () => {
  const { dataBase } = useLoaderData() as ILoaderData;
    const dataProducts: any  = dataBase.products ? Object.values(dataBase.products) : undefined
  return (
    <>
    <CatalogHero name={dataBase.name} image={dataBase.image}/>
    {dataBase.products ? <CatalogGrid data={dataProducts}/> : undefined}
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
