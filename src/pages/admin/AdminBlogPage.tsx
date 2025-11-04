import { Button, Container, Group, Title, Stack, Paper, Text } from "@mantine/core";
import { useAppDispatch } from "../../hooks";
import { openModal } from "../../store/editSlice";
import useFetchSortedData from "../../hooks/useFetchSortedData";
import AdminModal from "../../components/admin/AdminModal";
import AdminBlogForm from "../../components/admin/AdminBlogForm";
import AdminPanelSettings from "../../components/admin/AdminPanelSettings";

const AdminBlogPage = () => {
  const dispatch = useAppDispatch();
  const [posts, loading] = useFetchSortedData({ url: "/blog", field: "createdAt" });

  const orderedPosts = Array.isArray(posts) ? [...posts].reverse() : [];

  return (
    <Container fluid>
      <AdminModal size="calc(100vw - 3rem)">
        <AdminBlogForm />
      </AdminModal>
      <Group justify="space-between" mt="md" mb="md">
        <Title>Блог</Title>
        <Button
          variant="default"
          radius={0}
          size="md"
          onClick={() => dispatch(openModal())}
        >
          Добавить статью
        </Button>
      </Group>
      {!loading ? (
        orderedPosts.length === 0 ? (
          <Text c="dimmed">Статей пока нет. Нажмите "Добавить статью".</Text>
        ) : (
          <Stack>
            {orderedPosts.map((post: any, idx: number) => (
              <Paper key={idx} p="md" withBorder>
                <Group justify="space-between" align="flex-start">
                  <Stack gap={4}>
                    <Title order={4}>{post.title}</Title>
                    <Text c="dimmed" size="sm">
                      {post.createdAt ? new Date(post.createdAt).toLocaleString() : ""}
                    </Text>
                  </Stack>
                  <AdminPanelSettings element={post} deleteLink={`blog/${post.value}`} />
                </Group>
              </Paper>
            ))}
          </Stack>
        )
      ) : (
        "Загрузка ..."
      )}
    </Container>
  );
};

export default AdminBlogPage;


