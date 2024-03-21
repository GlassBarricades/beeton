import { useForm, isNotEmpty } from "@mantine/form";
import {
  TextInput,
  NumberInput,
  Group,
  Checkbox,
  Button,
  Textarea,
  TagsInput,
} from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { useParams } from "react-router-dom";
import { closeModal } from "../../store/editSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Link, RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

const AdminProductsForm: React.FC = () => {
  const { category } = useParams();
  const edit = useAppSelector((state) => state.edit.edit);
  const editData = useAppSelector((state) => state.edit.editData);
  const editUuid = useAppSelector((state) => state.edit.editUuid);
  const dispatch = useAppDispatch();

  interface IDataObj {
    name: string;
    link: string;
    position: number;
    image: string;
    description: string;
    descrUp: string;
    imageArr: string[];
    visible: boolean;
    delivery: boolean;
  }

  useEffect(() => {
    if (edit) {
      form.setValues({
        name: editData.name,
        link: editData.link,
        position: editData.position,
        image: editData.image,
        description: editData.description,
        descrUp: editData.descrUp,
        imageArr: editData.imageArr,
        visible: editData.visible,
        delivery: editData.delivery,
      });
    }
  }, [edit]);

  const form = useForm<IDataObj>({
    initialValues: {
      name: "",
      link: "",
      position: 0,
      image: "",
      description: "",
      descrUp: '',
      imageArr: [],
      visible: false,
      delivery: false,
    },
    validate: {
      link: isNotEmpty("Поле не должно быть пустым"),
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: form.values["descrUp"],
    onUpdate({ editor }) {
      form.setFieldValue("descrUp", editor.getHTML());
    },
    onCreate({ editor }) {
      editor.commands.insertContent(editData.descrUp)
    },
  });

  console.log(form.values)

  return (
    <form
      onSubmit={
        !edit
          ? form.onSubmit((values) =>
              writeToDatabase(
                `/catalog/${category}/products/${values.link}`,
                { ...values },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/catalog/${category}/products/${values.link}`,
                editUuid,
                form.reset,
                () => dispatch(closeModal())
              );
            })
      }
    >
      <TextInput
        placeholder="Название катерогии"
        label="Название категории"
        withAsterisk
        {...form.getInputProps("name")}
      />
      <TextInput
        placeholder="Ссылка для меню"
        label="Ссылка для меню"
        withAsterisk
        disabled={edit ? true : false}
        {...form.getInputProps("link")}
      />
      <NumberInput
        placeholder="Позиция для сортировки"
        label="Позиция для сортировки"
        {...form.getInputProps("position")}
      />
      <TextInput
        label="Картинка"
        placeholder="Картинка"
        {...form.getInputProps("image")}
      />
      <Textarea
        placeholder="Описание"
        label="Описание"
        autosize
        minRows={3}
        {...form.getInputProps("description")}
      />
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <TagsInput
        label="Картинки"
        allowDuplicates
        data={[]}
        {...form.getInputProps("imageArr")}
      />
      <Group>
        <Checkbox
          mt="xs"
          size="md"
          variant="outline"
          label="Скрыть"
          {...form.getInputProps("visible", { type: "checkbox" })}
        />
        <Checkbox
          mt="xs"
          size="md"
          variant="outline"
          label="Без доставки"
          {...form.getInputProps("delivery", { type: "checkbox" })}
        />
      </Group>
      <Button mt="md" type="submit" variant="default" radius={0} size="md">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminProductsForm;
