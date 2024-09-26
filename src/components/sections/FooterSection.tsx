import {
  Anchor,
  Box,
  Container,
  Group,
  SimpleGrid,
  useMantineColorScheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import SocialIcons from "../UI/SocialIcons";
import ContactsStack from "../UI/ContactsStack";
import DropDownMenu from "../UI/DropDownMenu";
import classes from "./FooterSection.module.css";
import useFetchSortedData from "../../hooks/useFetchSortedData";

const FooterSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const [categories] = useFetchSortedData(
		{ url: '/catalog', field: 'position' },
	)
  const [information] = useFetchSortedData({
    url: "/information",
    field: "position",
  });
  return (
    <Container fluid mb="xl" mt="xl">
      <Group justify="space-between" mb="xl">
        <Logo variant="base"/>
        <SocialIcons />
      </Group>
      <Box className={classes.mobileMenu}>
        <DropDownMenu data={categories} title="Каталог" />
        <DropDownMenu data={information} title="Информация" />
      </Box>
      <Box className={classes.mobileMenu} mb="xl">
        <ContactsStack />
      </Box>
      <SimpleGrid cols={2} className={classes.desctopMenu}>
        <SimpleGrid cols={2}>
          <SimpleGrid cols={{ base: 1, md: 2 }} verticalSpacing={2}>
            {categories.map((item: any, indx: any) => {
              return (
								<Anchor
									c={colorScheme === 'dark' ? 'gray' : 'black'}
									key={indx}
									component={Link}
									to={`catalog/${item.link}`}
									underline='hover'
								>
									{item.title ? item.title : item.name}
								</Anchor>
							)
            })}
          </SimpleGrid>
          <SimpleGrid cols={1} verticalSpacing="xs">
            {information.map((item: any, indx: any) => {
              return (
                <Anchor
                  inline
                  c={colorScheme === "dark" ? "gray" : "black"}
                  key={indx}
                  component={Link}
                  to="/info"
                  underline="hover"
                >
                  {item.title}
                </Anchor>
              );
            })}
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <ContactsStack />
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};
export default FooterSection;
