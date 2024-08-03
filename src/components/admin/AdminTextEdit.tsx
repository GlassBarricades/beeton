import { ActionIcon, Box, Group, ScrollArea, useMantineColorScheme } from "@mantine/core";
import { Pencil } from "tabler-icons-react";
import { useAppDispatch } from "../../hooks";
import useFetchDataOne from "../../hooks/useFetchDataOne";
import { editedText } from "../../store/textEditSlice";
import AdminModalText from "./AdminModalText";
import AdminTextEditForm from "./AdminTextEditForm";

interface IAdminTextEditProps {
  link: string;
}

const AdminTextEdit = ({ link }: IAdminTextEditProps) => {
  const [data, loading] = useFetchDataOne(link);
  const dispatch = useAppDispatch();
  const colorScheme = useMantineColorScheme()
  console.log(loading);
  return (
    <Box>
      <AdminModalText size="xl">
        <AdminTextEditForm link={link} />
      </AdminModalText>
      <Group justify="space-between" mb="md">
        <Group>
          <ActionIcon
            size="lg"
            radius={0}
            variant={colorScheme.colorScheme === "dark" ? "outline" : "default"}
            onClick={() => dispatch(editedText(data))}
            color={colorScheme.colorScheme === "dark" ? "yellow.5" : undefined}
          >
            <Pencil size="1.2rem" />
          </ActionIcon>
          {/* <Button
            variant="default"
            radius={0}
            size="md"
            onClick={() => dispatch(openModalText())}
          >
            Добавить текст
          </Button> */}
        </Group>
      </Group>
      <ScrollArea h={"80vh"} miw={"100%"} mx="auto" offsetScrollbars>
      <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      </ScrollArea>
    </Box>
  );
};
export default AdminTextEdit;
