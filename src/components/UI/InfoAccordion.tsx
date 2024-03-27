import { Plus } from "tabler-icons-react";
import { Accordion, Group, Title } from "@mantine/core";
import classes from "./InfoAccordion.module.css";
import AdminPanelSettings from "../admin/AdminPanelSettings";

interface IAccordionProps {
  data: any
  variant: 'default' | 'admin'
}

const InfoAccordion = ({ data, variant }: IAccordionProps) => {
  const items = data.map((item: any, indx: any) => {
    return (
      <Accordion.Item value={item.value} key={indx}>
        <Accordion.Control>
          <Group>
            {variant === 'admin' ? <AdminPanelSettings element={item} deleteLink={`information/${item.value}`} /> : undefined}
          <Title order={4}>{item.title}</Title>
          </Group>
          
        </Accordion.Control>
        <Accordion.Panel>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });
  return (
    <Accordion
      variant="contained"
      radius={0}
      transitionDuration={500}
      classNames={{ chevron: classes.chevron }}
      chevron={<Plus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
};
export default InfoAccordion;
