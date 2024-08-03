import {
  ActionIcon,
  Box,
  Container,
  Group,
  Image,
  SimpleGrid,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import AdminModal from "../../components/admin/AdminModal";
import AdminTextEdit from "../../components/admin/AdminTextEdit";
import { useAppDispatch } from "../../hooks";
import { edited } from "../../store/editSlice";
import AdminAboutForm from "../../components/admin/AdminAboutForm";
import { Pencil } from "tabler-icons-react";
import useFetchDataOne from "../../hooks/useFetchDataOne";

const AdminAboutPage = () => {
  const [data, loading] = useFetchDataOne("/about-image/image");
  const colorScheme = useMantineColorScheme();
  const dispatch = useAppDispatch();
  console.log(loading);
  console.log(data);
  return (
    <Container fluid>
      <AdminModal size="md">
        <AdminAboutForm />
      </AdminModal>
      <Group justify="space-between" mt="md" mb="md">
        <Title>О нас</Title>
      </Group>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box>
          <ActionIcon
            size="lg"
            mb="xl"
            radius={0}
            variant={colorScheme.colorScheme === "dark" ? "outline" : "default"}
            onClick={() => dispatch(edited(data))}
            color={colorScheme.colorScheme === "dark" ? "yellow.5" : undefined}
          >
            <Pencil size="1.2rem" />
          </ActionIcon>
          <Image src={data.image} alt="beeton about"/>
        </Box>
        <AdminTextEdit link={"/about-text/text"} />
      </SimpleGrid>
    </Container>
  );
};
export default AdminAboutPage;
