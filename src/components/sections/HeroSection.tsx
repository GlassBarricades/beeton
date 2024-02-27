import { Card, Center, Container, Grid, SimpleGrid, Skeleton, Stack, Text, Title, rem } from '@mantine/core'

const PRIMARY_COL_HEIGHT = rem(780)

const HeroSection = () => {
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

	return (
		<Container my='md' fluid>
			<SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
				<Card shadow='sm'>
					<Center h={'100%'}>
						<Stack>
							<Title size='5rem'>BEETON.BY</Title>
							<Text size='xl'>Мастерская бетонные изделий: горшки, кашпо и декор</Text>
						</Stack>
					</Center>
				</Card>
				<Grid gutter='md'>
					<Grid.Col>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius='md'
							animate={false}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius='md'
							animate={false}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={SECONDARY_COL_HEIGHT}
							radius='md'
							animate={false}
						/>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</Container>
	)
}
export default HeroSection
