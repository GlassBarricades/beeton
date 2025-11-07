import {
  AppShell,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./MainAppLayout.module.css";
import { Outlet, NavLink } from "react-router-dom";
import { ThemeChange } from "../UI/ThemeChange";
import Logo from "../UI/Logo";

const MainAppLayout = () => {
  const [opened, { toggle, close }] = useDisclosure();

  const links = [
		{ title: 'Главная', link: '/' },
		{ title: 'О нас', link: '/about' },
		{ title: 'Изделия', link: '/catalog' },
		{ title: 'Дизайнерам', link: '/for-designers' },
		{ title: 'Блог', link: '/blog' },
		{ title: 'Контакты', link: '/contacts' },
		{ title: 'Админка', link: '/admin' },
	]

  const linksItems = links.map((item) => {
    return (
      <UnstyledButton
        key={item.link}
        onClick={close}
        to={item.link}
        component={NavLink}
        className={classes.control}
      >
        {item.title}
      </UnstyledButton>
    );
  });

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "xl",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger className={classes.burger} opened={opened} onClick={toggle} size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Logo variant="default"/>
              <Group ml="xl" gap={0}>
                <Group gap={0} className={classes.menuWrap}>
                  {linksItems}
                </Group>
                <ThemeChange />
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          {linksItems}
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default MainAppLayout;
