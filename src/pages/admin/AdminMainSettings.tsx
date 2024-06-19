import { Button, Container, Group, Title } from '@mantine/core'
import { useAppDispatch } from '../../hooks'
import { edited } from '../../store/editSlice'
import AdminModal from '../../components/admin/AdminModal'
import AdminMainSettingsForm from '../../components/admin/AdminMainSettingsForm'
import useFetchDataOne from '../../hooks/useFetchDataOne'

const AdminMainSettings = () => {
	const dispatch = useAppDispatch()
    const [settings] = useFetchDataOne('/mainsettings/')

	return (
		<Container fluid>
			<AdminModal size="md">
				<AdminMainSettingsForm />
			</AdminModal>
			<Group justify='space-between' mt='md'>
				<Title>Основные настройки</Title>
				<Button
					variant='default'
					radius={0}
					size='md'
					onClick={() => dispatch(edited(settings))}
				>
					Редактировать
				</Button>
			</Group>
		</Container>
	)
}
export default AdminMainSettings
