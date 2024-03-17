import { Title } from "@mantine/core"
import { useParams } from "react-router-dom";

const AdminProductsPage = () => {
    const { category } = useParams()
    return (
        <Title>{category}</Title>
    )
}
export default AdminProductsPage;