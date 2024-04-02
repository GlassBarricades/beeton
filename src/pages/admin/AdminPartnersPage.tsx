import { Button, Container, Group, Title } from "@mantine/core";
import AdminModal from "../../components/admin/AdminModal";
import AdminPartnersForm from "../../components/admin/AdminPartnersForm";
import AdminRow from "../../components/admin/AdminRow";
import AdminTable from "../../components/admin/AdminTable";
import { useAppDispatch } from "../../hooks";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import { openModal } from "../../store/editSlice";

const AdminPartnersPage = () => {
  const dispatch = useAppDispatch();
  const [partners, loading] = useFetchSortedData({
    url: "/partners",
    field: "position",
  });

  const rows = partners.map((element: any) => (
    <AdminRow key={element.uuid} element={element} deleteLink={`/partners/${element.name}`} variant="no-link"/>
))

  return <Container fluid>
    <AdminModal size="md">
        <AdminPartnersForm />
      </AdminModal>
    <Group justify="space-between" mt="md" mb="md">
        <Title>Партнёры</Title>
        <Button
          variant="default"
          radius={0}
          size="md"
          onClick={() => dispatch(openModal())}
        >
          Добавить партнера
        </Button>
      </Group>
      <AdminTable
				rows={rows}
				columnArray={[
					'Сортировка',
					'Название',
					'Картинки',
					'Настройки',
				]}
				loading={loading}
			/>
  </Container>;
};
export default AdminPartnersPage;
