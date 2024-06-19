import { Text } from "@mantine/core";
import CatalogGrid from "../components/CatalogGrid";
import CatalogSection from "../components/sections/CatalogSection";
import useFetchSortedData from "../hooks/useFetchSortedData";

interface IHomeCategoryItem {
    delivery: boolean
    description?: string
    image?: string
    link: string
    name?: string
    position: number
    uuid: string
    visible: boolean
    products?: ICatalogItem[]
}

interface ICatalogItem {
    category?: string
    description?: string
    imageArr?: string[]
    link: string
    name?: string
    position: number
    price?: string
    uuid: string
    visible: boolean
}

const CatalogPage = () => {
    const [catalog, loading] = useFetchSortedData({
        url: "/catalog",
        field: "position",
    });

    const fullCatalog = catalog
        .flatMap((item: IHomeCategoryItem) => {
            const { products, link } = item;
            if (products) {
                return Object.values(products).map((product: ICatalogItem) => ({ ...product, category: link }));
            }
            return [];
        });

    return (
        <>
            <CatalogSection />
            {loading ? <Text ml="xl" size="xl">Загрузка...</Text> : <CatalogGrid data={fullCatalog} />}
            
        </>
    )
}
export default CatalogPage;