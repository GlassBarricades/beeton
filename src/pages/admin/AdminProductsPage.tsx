import { useParams } from "react-router-dom";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import { useAppDispatch } from "../../hooks";
import { Button, Container, Group, Title } from "@mantine/core";
import AdminRow from "../../components/admin/AdminRow";
import AdminModal from "../../components/admin/AdminModal";
import AdminTable from "../../components/admin/AdminTable";
import { openModal } from "../../store/editSlice";
import AdminProductsForm from "../../components/admin/AdminProductsForm";

const AdminMain = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const [categories, loading] = useFetchSortedData({
    url: `/catalog/${category}/products`,
    field: "position",
  });

  const rows = categories.map((element: any) => {
    console.log(element);
    return (
      <AdminRow
        key={element.uuid}
        element={element}
        deleteLink={`/catalog/${category}/products/${element.link}`}
      />
    );
  });

  return (
    <Container fluid>
      <AdminModal size="calc(100vw - 3rem)">
        <AdminProductsForm />
      </AdminModal>
      <Group justify="space-between" mt="md">
        <Title>Продукты</Title>
        <Button
          variant="default"
          radius={0}
          size="md"
          onClick={() => dispatch(openModal())}
        >
          Добавить элемент
        </Button>
      </Group>
      <AdminTable
        rows={rows}
        columnArray={[
          "Сортировка",
          "Название",
          "Картинки",
          "Ссылка",
          "Настройки",
        ]}
        loading={loading}
      />
    </Container>
  );
};
export default AdminMain;
