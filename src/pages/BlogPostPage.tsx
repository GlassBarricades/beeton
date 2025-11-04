import { Container, Paper, Stack, Title, Text, BackgroundImage } from "@mantine/core";
import { useParams } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import FooterSection from "../components/sections/FooterSection";
import useFetchDataOne from "../hooks/useFetchDataOne";

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, loading] = useFetchDataOne(`/blog/${slug}`);

  return (
    <>
      <ScrollToTop />
      {!loading && post?.image ? (
        <BackgroundImage src={post.image} h={220} radius={0} />
      ) : null}
      <Container mt="xl" mih={"70vh"}>
        {!loading ? (
          <Paper p="xl" withBorder>
            <Stack gap="md">
              <Title order={2}>{post?.title}</Title>
              {post?.createdAt ? (
                <Text c="dimmed" size="sm">
                  {new Date(post.createdAt).toLocaleString()}
                </Text>
              ) : null}
              <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
            </Stack>
          </Paper>
        ) : (
          "Загрузка ..."
        )}
      </Container>
      <FooterSection />
    </>
  );
};

export default BlogPostPage;


