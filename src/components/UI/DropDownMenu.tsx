import { Accordion, Anchor, Stack, useMantineColorScheme } from "@mantine/core";
import { Link } from "react-router-dom";

interface IDropDownMenuProps {
  data: any;
  title: string;
}

const DropDownMenu = ({ data, title }: IDropDownMenuProps) => {
  const { colorScheme } = useMantineColorScheme();
  const items = data.map((item: any) => {
    return (
      <Anchor
        c={colorScheme === "dark" ? "gray" : "black"}
        key={item.uuid}
        component={Link}
        to={item.link ? `/catalog/${item.link}` : "/info"}
        underline="hover"
      >
        {item.title ? item.title : item.name}
      </Anchor>
    );
  });

  return (
    <Accordion mb="md" variant="separated">
      <Accordion.Item value={title}>
        <Accordion.Control>{title}</Accordion.Control>
        <Accordion.Panel>
          <Stack>{items}</Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
export default DropDownMenu;
