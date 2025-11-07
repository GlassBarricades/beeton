import { Center, Container, Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import ContactsStack from "../components/UI/ContactsStack";
import useFetchSortedData from "../hooks/useFetchSortedData";
import classes from "./ContactsPage.module.css";
import { useAppSelector } from "../hooks";

const ContactsPage = () => {
  const [information, loading] = useFetchSortedData({
    url: "/information",
    field: "position",
  });
  const settings = useAppSelector((state) => state.settings.settings);
  const contactsBackgroundImage = settings?.contactsBackgroundImage;
  const wrapperStyle = contactsBackgroundImage
    ? { backgroundImage: `url(${contactsBackgroundImage})` }
    : undefined;
  return (
    <div className={classes.wrapper} style={wrapperStyle}>
      <div className={classes.gradientOverlay}>
        <Container h={"100%"}>
          <SimpleGrid cols={{base: 1, md: 2}} h={"100%"}>
            <Center>
              <Paper p="xl">
                {!loading ? (
                  <Stack gap="md">
                    {information.map((item: any, indx: any) => (
                      <Stack key={indx} gap={4}>
                        <Title order={4}>{item.title}</Title>
                        <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                      </Stack>
                    ))}
                  </Stack>
                ) : (
                  "Загрузка ..."
                )}
              </Paper>
            </Center>
            <Center>
              <Paper p="xl">
                <ContactsStack align="center" />
              </Paper>
            </Center>
          </SimpleGrid>
        </Container>
      </div>
    </div>
  );
};
export default ContactsPage;
