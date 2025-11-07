import { useForm, isNotEmpty } from '@mantine/form'
import { TextInput, NumberInput, Button } from '@mantine/core'
import writeToDatabase from '../../helpers/writeToDataBase'
import submitChangeDataBase from '../../helpers/submitChangeDataBase'
import { closeModal } from '../../store/editSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

const AdminVideoForm = () => {
	const edit = useAppSelector(state => state.edit.edit)
	const editData = useAppSelector(state => state.edit.editData)
	const editUuid = useAppSelector(state => state.edit.editUuid)
	const dispatch = useAppDispatch()

	interface IDataObj {
		name: string
        link: string
		position: number
		image: string
	}

	useEffect(() => {
		if (edit) {
			form.setValues({
				name: editData.name,
                link: editData.link,
				position: editData.position,
				image: editData.image,
			})
		}
	}, [edit])

	const form = useForm<IDataObj>({
		initialValues: {
		name: '',
        link: '',
		position: 0,
		image: '',
	},
		validate: {
			name: isNotEmpty('Поле не должно быть пустым!'),
		},
	})

	return (
		<form
			onSubmit={
				!edit
					? form.onSubmit(values =>
							writeToDatabase(
								`/video/${values.link}`,
								{ ...values },
								form.reset,
								() => dispatch(closeModal()),
								false
							)
					  )
					: form.onSubmit(values => {
							submitChangeDataBase(
								values,
								`/video/${values.link}`,
								editUuid,
								form.reset,
								() => dispatch(closeModal())
							)
					  })
			}
		>
			<TextInput
				placeholder='Название'
				label='Название'
				withAsterisk
				{...form.getInputProps('name')}
			/>
            <TextInput
				placeholder='Ссылка'
				label='Ссылка'
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
			<Button mt='md' type='submit' variant="default" radius={0} size="md">
				{edit ? 'Сохранить' : 'Отправить'}
			</Button>
		</form>
	)
}
export default AdminVideoForm