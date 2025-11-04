import { Anchor, Button, Container, Group, Image, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useAppDispatch } from '../../hooks'
import { edited } from '../../store/editSlice'
import AdminModal from '../../components/admin/AdminModal'
import AdminMainSettingsForm from '../../components/admin/AdminMainSettingsForm'
import useFetchDataOne from '../../hooks/useFetchDataOne'

const AdminMainSettings = () => {
	const dispatch = useAppDispatch()
    const [settings] = useFetchDataOne('/mainsettings/')

	console.log(settings)

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
			{settings ? (
				<SimpleGrid mt="md" cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
					<Paper withBorder p="md">
						<Stack gap={8}>
							<Title order={4}>Контакты</Title>
							{settings.phone ? (
								<Anchor component='a' href={`tel:${settings.phone}`} underline='hover'>Телефон: {settings.phone}</Anchor>
							) : null}
							{settings.email ? (
								<Anchor component='a' href={`mailto:${settings.email}`} underline='hover'>Email: {settings.email}</Anchor>
							) : null}
							{settings.adress ? (<Text>Адрес: {settings.adress}</Text>) : null}
							{settings.adressLink ? (
								<Anchor component='a' target='_blank' href={settings.adressLink} underline='hover'>Ссылка на карту</Anchor>
							) : null}
						</Stack>
					</Paper>

					<Paper withBorder p="md">
						<Stack gap={8}>
							<Title order={4}>Соцсети</Title>
							{settings.telegram ? (<Text>Telegram: {settings.telegram}</Text>) : null}
							{settings.instagram ? (<Text>Instagram: {settings.instagram}</Text>) : null}
							{settings.viber ? (<Text>Viber: {settings.viber}</Text>) : null}
						</Stack>
					</Paper>

					<Paper withBorder p="md">
						<Stack gap={8}>
							<Title order={4}>Промо</Title>
							{settings.heroText ? (<Text size='sm'>{settings.heroText}</Text>) : null}
						</Stack>
					</Paper>

					<Paper withBorder p="md">
						<Stack gap={8}>
							<Title order={4}>Картинки</Title>
							{settings.mainImage ? (<Image src={settings.mainImage} alt='main' h={120} fit='cover' radius={0} />) : null}
							{settings.logo ? (<Image src={settings.logo} alt='logo' h={60} fit='contain' radius={0} />) : null}
							{settings.logoDarkTheme ? (<Image src={settings.logoDarkTheme} alt='logo dark' h={60} fit='contain' radius={0} />) : null}
						</Stack>
					</Paper>
				</SimpleGrid>
			) : null}
		</Container>
	)
}
export default AdminMainSettings
