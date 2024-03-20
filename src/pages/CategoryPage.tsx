import { child, get, getDatabase, ref } from "firebase/database";
import { useLoaderData } from "react-router-dom";
import CatalogHero from "../components/catalog/CatalogHero";

interface ILoaderData {
  dataBase: any;
  category: string;
}

const CategoryPage = () => {
  const { dataBase, category } = useLoaderData() as ILoaderData;
  console.log(dataBase);
  console.log(category);
  return (
    <CatalogHero name={dataBase.name} image={dataBase.image}/>
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

  return { dataBase, category };
};

export { CategoryPage, categoryLoader };
