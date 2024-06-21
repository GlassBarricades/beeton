import { Button, Container, Group, Title } from '@mantine/core'
import { useAppDispatch } from '../../hooks'
import { openModal } from '../../store/editSlice'
import AdminModal from '../../components/admin/AdminModal'
import AdminCategoryForm from '../../components/admin/AdminCategoriesForm'
import AdminTable from '../../components/admin/AdminTable'
import useFetchSortedData from '../../hooks/useFetchSortedData'
import AdminRow from '../../components/admin/AdminRow'

const AdminCategoriesPage = () => {
	const dispatch = useAppDispatch()
	const [categories, loading] = useFetchSortedData(
		{ url: '/catalog', field: 'position' },
	)

	const rows = categories.map((element: any) => (
		<AdminRow key={element.uuid} element={element} deleteLink={`/catalog/${element.link}`}/>
	))

	return (
		<Container fluid>
			<AdminModal size="calc(100vw - 3rem)">
				<AdminCategoryForm />
			</AdminModal>
			<Group justify='space-between' mt='md'>
				<Title>Категории</Title>
				<Button
					variant='default'
					radius={0}
					size='md'
					onClick={() => dispatch(openModal())}
				>
					Добавить элемент
				</Button>
			</Group>
			<AdminTable
				rows={rows}
				columnArray={[
					'Сортировка',
					'Название',
					'Картинки',
					'Ссылка',
					'Настройки',
				]}
				loading={loading}
			/>
		</Container>
	)
}
export default AdminCategoriesPage
