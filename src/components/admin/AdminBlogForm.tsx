import { useEffect } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { Button, Checkbox, Grid, Group, Image, InputWrapper, TextInput } from "@mantine/core";
import { Link, RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
import { closeModal } from "../../store/editSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const AdminBlogForm: React.FC = () => {
  const edit = useAppSelector((state) => state.edit.edit);
  const editData = useAppSelector((state) => state.edit.editData);
  const editUuid = useAppSelector((state) => state.edit.editUuid);
  const dispatch = useAppDispatch();

  interface IDataObj {
    title: string;
    value: string; // slug
    image: string;
    content: string;
    visible: boolean;
    createdAt?: number;
  }

  useEffect(() => {
    if (edit) {
      form.setValues({
        title: editData.title,
        value: editData.value,
        image: editData.image,
        content: editData.content,
        visible: editData.visible,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  const form = useForm<IDataObj>({
    initialValues: {
      title: "",
      value: "",
      image: "",
      content: "",
      visible: false,
    },
    validate: {
      value: isNotEmpty("Поле не должно быть пустым"),
      title: isNotEmpty("Поле не должно быть пустым"),
    },
  });

  function slugify(input: string): string {
    const map: Record<string, string> = {
      а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y',
      к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
      х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
    };
    return input
      .toLowerCase()
      .split('')
      .map(ch => (map as any)[ch] ?? ch)
      .join('')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

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
    content: form.values["content"],
    onUpdate({ editor }) {
      form.setFieldValue("content", editor.getHTML());
    },
    onCreate({ editor }) {
      editor.commands.insertContent(editData.content || "");
    },
  });

  return (
    <form
      onSubmit={
        !edit
          ? form.onSubmit((values) =>
              writeToDatabase(
                `/blog/${values.value}`,
                { ...values, createdAt: Date.now() },
                form.reset,
                () => dispatch(closeModal()),
                false
              )
            )
          : form.onSubmit((values) => {
              submitChangeDataBase(
                values,
                `/blog/${values.value}`,
                editUuid,
                form.reset,
                () => dispatch(closeModal())
              );
            })
      }
    >
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            placeholder="Заголовок статьи"
            label="Заголовок статьи"
            withAsterisk
            value={form.values.title}
            onChange={(e) => {
              const title = e.currentTarget.value
              const previousAuto = slugify(form.values.title)
              form.setFieldValue('title', title)
              if (!edit) {
                const auto = slugify(title)
                if (!form.values.value || form.values.value === previousAuto) {
                  form.setFieldValue('value', auto)
                }
              }
            }}
          />
          <TextInput
            placeholder="Слаг (URL)"
            label="Слаг (URL)"
            description="латиница, без пробелов; генерируется из заголовка"
            withAsterisk
            disabled={edit ? true : false}
            {...form.getInputProps("value")}
          />
          <TextInput
            placeholder="Ссылка на изображение"
            label="Ссылка на изображение"
            {...form.getInputProps("image")}
          />
          {form.values.image ? (
            <Image src={form.values.image} alt="preview" mah={180} fit="contain" radius={0} />
          ) : null}
          <Group>
            <Checkbox
              mt="xs"
              size="md"
              variant="outline"
              label="Скрыть"
              {...form.getInputProps("visible", { type: "checkbox" })}
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <InputWrapper label="Текст статьи">
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

              <RichTextEditor.Content style={{ maxHeight: '60vh', minHeight: 300, overflowY: 'auto' }} />
            </RichTextEditor>
          </InputWrapper>
        </Grid.Col>
      </Grid>
      <Button mt="md" type="submit" variant="default" radius={0} size="md">
        {edit ? "Сохранить" : "Отправить"}
      </Button>
    </form>
  );
};

export default AdminBlogForm;


