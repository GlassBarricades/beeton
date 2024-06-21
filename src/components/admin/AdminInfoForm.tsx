import { useForm, isNotEmpty } from "@mantine/form";
import {
  TextInput,
  NumberInput,
  Group,
  Checkbox,
  Button,
  Grid,
  InputWrapper,
} from "@mantine/core";
import writeToDatabase from "../../helpers/writeToDataBase";
import submitChangeDataBase from "../../helpers/submitChangeDataBase";
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

const AdminInfoForm: React.FC = () => {
  const edit = useAppSelector((state) => state.edit.edit);
  const editData = useAppSelector((state) => state.edit.editData);
  const editUuid = useAppSelector((state) => state.edit.editUuid);
  const dispatch = useAppDispatch();

  interface IDataObj {
    title: string;
    value: string;
    position: number;
    content: string;
    visible: boolean;
  }

  useEffect(() => {
    if (edit) {
      form.setValues({
        title: editData.title,
        value: editData.value,
        position: editData.position,
        content: editData.content,
        visible: editData.visible,
      });
    }
  }, [edit]);

  const form = useForm<IDataObj>({
    initialValues: {
      title: "",
      value: "",
      position: 0,
      content: "",
      visible: false,
    },
    validate: {
		value: isNotEmpty("Поле не должно быть пустым"),
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
    content: form.values["content"],
    onUpdate({ editor }) {
      form.setFieldValue('content', editor.getHTML())
    },
    onCreate({ editor }) {
      editor.commands.insertContent(editData.content)
    },
  });

  return (
		<form
			onSubmit={
				!edit
					? form.onSubmit(values =>
							writeToDatabase(
								`/information/${values.value}`,
								{ ...values },
								form.reset,
								() => dispatch(closeModal()),
								false
							)
					  )
					: form.onSubmit(values => {
							submitChangeDataBase(
								values,
								`/information/${values.value}`,
								editUuid,
								form.reset,
								() => dispatch(closeModal())
							)
					  })
			}
		>
			<Grid>
				<Grid.Col span={{base: 12, md: 6}}>
					<TextInput
						placeholder='Заголовок раздела'
						label='Заголовок раздела'
						withAsterisk
						{...form.getInputProps('title')}
					/>
                    <TextInput
						placeholder='Ссылка'
						label='Ссылка'
						withAsterisk
						disabled={edit ? true : false}
						{...form.getInputProps('value')}
					/>
					<NumberInput
						placeholder='Позиция для сортировки'
						label='Позиция для сортировки'
						{...form.getInputProps('position')}
					/>
					<Group>
						<Checkbox
							mt='xs'
							size='md'
							variant='outline'
							label='Скрыть'
							{...form.getInputProps('visible', { type: 'checkbox' })}
						/>
					</Group>
				</Grid.Col>
				<Grid.Col span={{base: 12, md: 6}}>
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
				</Grid.Col>
			</Grid>
			<Button mt='md' type='submit' variant='default' radius={0} size='md'>
				{edit ? 'Сохранить' : 'Отправить'}
			</Button>
		</form>
	)
};
export default AdminInfoForm;