import { useForm } from "@mantine/form";
import { Button, InputWrapper } from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
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
import { closeModalText } from "../../store/textEditSlice";

interface IAdminTextEditFormProps {
    link: string
}

const AdminTextEditForm = ({link}: IAdminTextEditFormProps) => {
  const edit = useAppSelector((state) => state.editText.editText);
  const editData = useAppSelector((state) => state.editText.editDataText);
  const editUuid = useAppSelector((state) => state.editText.editUuidText);
  const dispatch = useAppDispatch();

  interface IDataObj {
    text: string;
  }

  useEffect(() => {
    if (edit) {
      form.setValues({
        text: editData.text,
      });
    }
  }, [edit]);

  const form = useForm<IDataObj>({
    initialValues: {
      text: "",
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
    content: form.values["text"],
    onUpdate({ editor }) {
      form.setFieldValue("text", editor.getHTML());
    },
    onCreate({ editor }) {
      editor.commands.insertContent(editData.text);
    },
  });

  return (
    <form
      onSubmit={
        !edit
          ? form.onSubmit((values) =>
              writeToDatabase(
                link,
                { ...values },
                form.reset,
                () => dispatch(closeModalText()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                link,
                editUuid,
                form.reset,
                () => dispatch(closeModalText())
              );
            })
      }
    >
      <InputWrapper label="Текст">
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
      </InputWrapper>
      <Button mt="md" type="submit" variant="default" radius={0} size="md">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};
export default AdminTextEditForm;
