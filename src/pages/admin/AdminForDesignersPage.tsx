import {
	ActionIcon,
	Box,
	Container,
	Group,
	Image,
	SimpleGrid,
	Title,
	useMantineColorScheme,
} from '@mantine/core'
import AdminModal from '../../components/admin/AdminModal'
import AdminTextEdit from '../../components/admin/AdminTextEdit'
import { useAppDispatch } from '../../hooks'
import { edited } from '../../store/editSlice'
import { Pencil } from 'tabler-icons-react'
import useFetchDataOne from '../../hooks/useFetchDataOne'
import AdminForDesignersForm from '../../components/admin/AdminForDesignersForm'

const AdminForDesignersPage = () => {
	const [data, loading] = useFetchDataOne('/for-designers-image/image')
	const colorScheme = useMantineColorScheme()
	const dispatch = useAppDispatch()
	console.log(loading)
	console.log(data)
	return (
		<Container fluid>
			<AdminModal size='md'>
				<AdminForDesignersForm />
			</AdminModal>
			<Group justify='space-between' mt='md' mb='md'>
				<Title>Для дизайнеров</Title>
			</Group>
			<SimpleGrid cols={{ base: 1, md: 2 }}>
				<Box>
					<ActionIcon
						size='lg'
						mb='xl'
						radius={0}
						variant={colorScheme.colorScheme === 'dark' ? 'outline' : 'default'}
						onClick={() => dispatch(edited(data))}
						color={colorScheme.colorScheme === 'dark' ? 'yellow.5' : undefined}
					>
						<Pencil size='1.2rem' />
					</ActionIcon>
					<Image src={data.image} alt='beeton for designers' />
				</Box>
				<AdminTextEdit link={'/for-designers-text/text'} />
			</SimpleGrid>
		</Container>
	)
}
export default AdminForDesignersPage
