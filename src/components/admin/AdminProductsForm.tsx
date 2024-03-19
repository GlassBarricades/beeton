import { useForm, isNotEmpty } from '@mantine/form'
import { TextInput, NumberInput, Group, Checkbox, Button, Textarea } from '@mantine/core'
import writeToDatabase from '../../helpers/writeToDataBase'
import submitChangeDataBase from '../../helpers/submitChangeDataBase'
import { useParams } from 'react-router-dom'
import { closeModal } from '../../store/editSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

const AdminProductsForm = () => {
	const { category } = useParams()
	const edit = useAppSelector(state => state.edit.edit)
	const editData = useAppSelector(state => state.edit.editData)
	const editUuid = useAppSelector(state => state.edit.editUuid)
    // const {imageArr, setImageArr} = useState<string[]>([])
	const dispatch = useAppDispatch()

	interface IDataObj {
		name: string
		link: string
		position: number
		image: string
		description: string
		visible: boolean
		delivery: boolean
	}

	useEffect(() => {
		if (edit) {
			form.setValues({
				name: editData.name,
				link: editData.link,
				position: editData.position,
				image: editData.image,
				description: editData.description,
				visible: editData.visible,
				delivery: editData.delivery,
			})
		}
	}, [edit])

	const form = useForm<IDataObj>({
		initialValues: {
		name: '',
		link: '',
		position: 0,
		image: '',
		description: '',
		visible: false,
		delivery: false,
	},
		validate: {
			link: isNotEmpty('Поле не должно быть пустым'),
		},
	})

	return (
		<form
			onSubmit={
				!edit
					? form.onSubmit(values =>
							writeToDatabase(
								`/catalog/${category}/products/${values.link}`,
								{ ...values },
								form.reset,
								() => dispatch(closeModal()),
								false
							)
					  )
					: form.onSubmit(values => {
							submitChangeDataBase(
								values,
								`/catalog/${category}/products/${values.link}`,
								editUuid,
								form.reset,
								() => dispatch(closeModal())
							)
					  })
			}
		>
			<TextInput
				placeholder='Название катерогии'
				label='Название категории'
				withAsterisk
				{...form.getInputProps('name')}
			/>
			<TextInput
				placeholder='Ссылка для меню'
				label='Ссылка для меню'
				withAsterisk
				disabled={edit ? true : false}
				{...form.getInputProps('link')}
			/>
			<NumberInput
				placeholder='Позиция для сортировки'
				label='Позиция для сортировки'
				{...form.getInputProps('position')}
			/>
			<TextInput
				label='Картинка'
				placeholder='Картинка'
				{...form.getInputProps('image')}
			/>
			<Textarea
				placeholder='Описание'
				label='Описание'
				autosize
				minRows={3}
				{...form.getInputProps('description')}
			/>
            {/* <TagsInput data={[]} value={imageArr} onChange={setImageArr} /> */}
			<Group>
				<Checkbox
					mt='xs'
					size='md'
					variant="outline"
					label='Скрыть'
					{...form.getInputProps('visible', { type: 'checkbox' })}
				/>
				<Checkbox
					mt='xs'
					size='md'
					variant="outline"
					label='Без доставки'
					{...form.getInputProps('delivery', { type: 'checkbox' })}
				/>
			</Group>
			<Button mt='md' type='submit' variant="default" radius={0} size="md">
				{edit ? 'Сохранить' : 'Отправить'}
			</Button>
		</form>
	)
}
export default AdminProductsForm
