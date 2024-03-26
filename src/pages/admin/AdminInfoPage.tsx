import { Button, Container, Group, Title } from "@mantine/core";
import { useAppDispatch } from "../../hooks";
import { openModal } from "../../store/editSlice";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminModal from "../../components/admin/AdminModal";
import AdminInfoForm from "../../components/admin/AdminInfoForm";
import InfoAccordion from "../../components/UI/InfoAccordion";

const AdminInfoPage = () => {
  const dispatch = useAppDispatch();
  const [information, loading] = useFetchSortedData({
    url: "/information",
    field: "position",
  });
  console.log(information);
  console.log(loading);
  return (
    <Container fluid>
      <AdminModal size="calc(100vw - 3rem)">
        <AdminInfoForm />
      </AdminModal>
      <Group justify="space-between" mt="md">
        <Title>Информация</Title>
        <Button
          variant="default"
          radius={0}
          size="md"
          onClick={() => dispatch(openModal())}
        >
          Добавить Информацию
        </Button>
      </Group>
      <InfoAccordion />
    </Container>
  );
};
export default AdminInfoPage;
