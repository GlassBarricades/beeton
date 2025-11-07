import {
    Button,
    Container,
    Group,
    Title,
  } from "@mantine/core";
  import AdminModal from "../../components/admin/AdminModal";
  import AdminRow from "../../components/admin/AdminRow";
  import AdminTable from "../../components/admin/AdminTable";
  import { useAppDispatch } from "../../hooks";
  import useFetchSortedData from "../../hooks/useFetchSortedData";
  import { openModal } from "../../store/editSlice";
import AdminVideoForm from "../../components/admin/AdminVideoForm";
  
  const AdminVideoPage = () => {
    const dispatch = useAppDispatch();
    const [video, loading] = useFetchSortedData({
      url: "/video",
      field: "position",
    });
  
    const rows = video.map((element: any) => (
      <AdminRow
        key={element.uuid}
        element={element}
        deleteLink={`/video/${element.link}`}
      />
    ));
  
    return (
      <Container fluid>
        <AdminModal size="md">
          <AdminVideoForm />
        </AdminModal>
            <Group justify="space-between" mt="md" mb="md">
              <Title>Видео</Title>
              <Button
                variant="default"
                radius={0}
                size="md"
                onClick={() => dispatch(openModal())}
              >
                Добавить видео
              </Button>
            </Group>
            <AdminTable
              rows={rows}
              columnArray={["Сортировка", "Название", "Картинки", "ID видео", "Настройки"]}
              loading={loading}
            />
      </Container>
    );
  };
  export default AdminVideoPage;