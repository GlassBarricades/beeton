import { useForm, isNotEmpty } from '@mantine/form'
import { TextInput, NumberInput, Button } from '@mantine/core'
import writeToDatabase from '../../helpers/writeToDataBase'
import submitChangeDataBase from '../../helpers/submitChangeDataBase'
import { closeModal } from '../../store/editSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

const AdminPartnersForm = () => {
	const edit = useAppSelector(state => state.edit.edit)
	const editData = useAppSelector(state => state.edit.editData)
	const editUuid = useAppSelector(state => state.edit.editUuid)
	const dispatch = useAppDispatch()

	interface IDataObj {
		name: string
		position: number
		image: string
	}

	useEffect(() => {
		if (edit) {
			form.setValues({
				name: editData.name,
				position: editData.position,
				image: editData.image,
			})
		}
	}, [edit])

	const form = useForm<IDataObj>({
		initialValues: {
		name: '',
		position: 0,
		image: '',
	},
		validate: {
			name: isNotEmpty('Поле не должно быть пустым'),
		},
	})

	return (
		<form
			onSubmit={
				!edit
					? form.onSubmit(values =>
							writeToDatabase(
								`/partners/${values.name}`,
								{ ...values },
								form.reset,
								() => dispatch(closeModal()),
								false
							)
					  )
					: form.onSubmit(values => {
							submitChangeDataBase(
								values,
								`/partners/${values.name}`,
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
export default AdminPartnersForm
