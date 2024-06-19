import { useForm } from '@mantine/form'
import { TextInput, Button } from '@mantine/core'
import writeToDatabase from '../../helpers/writeToDataBase'
import submitChangeDataBase from '../../helpers/submitChangeDataBase'
import { closeModal } from '../../store/editSlice'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

interface IDataObj {
	mainImage: string
}

const AdminMainSettingsForm = () => {
	const edit = useAppSelector(state => state.edit.edit)
	const editData = useAppSelector(state => state.edit.editData)
	const editUuid = useAppSelector(state => state.edit.editUuid)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (edit) {
			form.setValues({
				mainImage: editData.mainImage,
			})
		}
	}, [edit])

	const form = useForm<IDataObj>({
		initialValues: {
		mainImage: '',
	},
	})

	return (
		<form
			onSubmit={
				!edit
					? form.onSubmit(values =>
							writeToDatabase(
								`/mainsettings/`,
								{ ...values },
								form.reset,
								() => dispatch(closeModal()),
								false
							)
					  )
					: form.onSubmit(values => {
							submitChangeDataBase(
								values,
								`/mainsettings/`,
								editUuid,
								form.reset,
								() => dispatch(closeModal())
							)
					  })
			}
		>
			<TextInput
				placeholder='Картинка на первом экране'
				label='Картинка на первом экране'
				withAsterisk
				{...form.getInputProps('mainImage')}
			/>
			<Button mt='md' type='submit' variant="default" radius={0} size="md">
				{edit ? 'Сохранить' : 'Отправить'}
			</Button>
		</form>
	)
}
export default AdminMainSettingsForm
