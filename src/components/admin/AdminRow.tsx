import { Image, Table } from "@mantine/core";
import AdminPanelSettings from "./AdminPanelSettings";
import { memo } from "react";

interface IProps {
  element: any;
  deleteLink: any;
  variant?: string;
}

const AdminRow = memo(({ element, deleteLink, variant }: IProps) => {
  return (
    <Table.Tr>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>
        <Image
          w={50}
          src={
            element.imageArr
              ? element.imageArr[0]
              : element.image
              ? element.image
              : "https://irl.by/wp-content/uploads/2017/08/52_nc7DbtMU.jpg"
          }
          alt={element.name}
        />
      </Table.Td>
      {variant !== 'no-link' ? <Table.Td>{`/${element.link}`}</Table.Td> : undefined}
      <Table.Td>
        <AdminPanelSettings element={element} deleteLink={deleteLink} />
      </Table.Td>
    </Table.Tr>
  );
});
export default AdminRow;
