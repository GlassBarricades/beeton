import { Anchor, Button, Card, Container, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import FooterSection from "../components/sections/FooterSection";
import useFetchSortedData from "../hooks/useFetchSortedData";
import ScrollToTop from "../helpers/ScrollToTop";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [posts, loading] = useFetchSortedData({ url: "/blog", field: "createdAt" });

  const orderedPosts = Array.isArray(posts) ? [...posts].reverse() : [];

  function getPreviewFromHtml(html: string, limit: number = 180) {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + "…";
  }

  return (
    <>
      <ScrollToTop />
      <Container mt="xl" mih={"70vh"} fluid>
        {!loading ? (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing="lg">
            {orderedPosts.length === 0 ? (
              <Text c="dimmed">Пока нет статей.</Text>
            ) : orderedPosts.map((post: any, idx: number) => {
              const preview = getPreviewFromHtml(post.content, 200)
              return (
                <Card key={idx} radius={0} padding="md" withBorder style={{ height: '100%' }}>
                  <Stack gap="sm" style={{ height: '100%' }}>
                    {post.image ? (
                      <Anchor component={Link} to={`/blog/${post.value}`}>
                        <Image src={post.image} alt={post.title} radius={0} h={180} fit="cover" />
                      </Anchor>
                    ) : null}
                    <Title order={4}>
                      <Anchor component={Link} to={`/blog/${post.value}`} underline="hover">
                        {post.title}
                      </Anchor>
                    </Title>
                    {post.createdAt ? (
                      <Text c="dimmed" size="xs">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </Text>
                    ) : null}
                    <Text size="sm" lineClamp={3}>
                      {preview}
                    </Text>
                    <Button mt="auto" component={Link} to={`/blog/${post.value}`} variant="default" radius={0} size="sm">
                      Читать
                    </Button>
                  </Stack>
                </Card>
              )
            })}
          </SimpleGrid>
        ) : (
          "Загрузка ..."
        )}
      </Container>
      <FooterSection />
    </>
  );
};

export default BlogPage;


