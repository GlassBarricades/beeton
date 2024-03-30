import { Center, Container, Paper, SimpleGrid } from "@mantine/core";
import ContactsStack from "../components/UI/ContactsStack";
import classes from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.gradientOverlay}>
        <Container h={"100%"}>
          <SimpleGrid cols={{base: 1, md: 2}} h={"100%"}>
            <div></div>
            <Center>
                <Paper p="xl">
              <ContactsStack />
              </Paper>
            </Center>
          </SimpleGrid>
        </Container>
      </div>
    </div>
  );
};
export default ContactsPage;
