import { Button, Container, Group, Title } from '@mantine/core'
import { useAppDispatch } from '../../hooks'
import { openModal } from '../../store/editSlice'
import AdminModal from '../../components/admin/AdminModal'
import AdminCategoryForm from '../../components/admin/AdminCategoriesForm'

const AdminCategoriesPage = () => {
    const dispatch = useAppDispatch()
	return (
		<Container fluid>
			<AdminModal>
				<AdminCategoryForm />
			</AdminModal>
			<Group justify='space-between'>
				<Title>Категории</Title>
				<Button onClick={() => dispatch(openModal())}>Добавить элемент</Button>
			</Group>
		</Container>
	)
}
export default AdminCategoriesPage
