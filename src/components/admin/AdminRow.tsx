import { Image, Table } from "@mantine/core";
import AdminPanelSettings from "./AdminPanelSettings";
import { memo } from "react";

interface IProps {
  element: any;
  deleteLink: any;
}

const AdminRow = memo(({ element, deleteLink }: IProps) => {
  return (
    <Table.Tr>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>
        <Image
          w={50}
          src={element.image ? element.image : element.imageArr[0]}
          alt={element.name}
        />
      </Table.Td>
      <Table.Td>{`/${element.link}`}</Table.Td>
      <Table.Td>
        <AdminPanelSettings element={element} deleteLink={deleteLink} />
      </Table.Td>
    </Table.Tr>
  );
});
export default AdminRow;
