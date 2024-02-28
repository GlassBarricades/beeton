import {
	Card,
	Center,
	Container,
	Grid,
	SimpleGrid,
	Stack,
	Text,
	Title,
	// rem,
	Image,
	ActionIcon,
	Group,
} from '@mantine/core'
import classes from './HeroSection.module.css'
import { BrandTelegram, BrandInstagram, BrandTiktok } from 'tabler-icons-react'

// const PRIMARY_COL_HEIGHT = rem(780)
const HeroSection = () => {
	// const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

	return (
		<Container my='md' fluid>
			<SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
				<Card>
					<Center h={'100%'}>
						<Stack>
							<Title className={classes.heroLogo}>BEETON.BY</Title>
							<Text size='xl'>
								Мастерская бетонные изделий: горшки, кашпо и декор
							</Text>
						</Stack>
					</Center>
				</Card>
				<Grid gutter='md'>
					<Grid.Col className={classes.heroCard}>
						<Image
							className={classes.heroImage}
							src='https://amiel.club/uploads/posts/2022-10/1664873112_1-amiel-club-p-dekor-iz-betona-v-interere-pinterest-1.jpg'
						/>
						<div className={classes.heroSocialIcons}>
							<Group>
								<ActionIcon variant='default' size='lg' aria-label='Settings'>
									<BrandTelegram style={{ width: '70%', height: '70%' }} />
								</ActionIcon>
								<ActionIcon variant='default' size='lg' aria-label='Settings'>
									<BrandInstagram style={{ width: '70%', height: '70%' }} />
								</ActionIcon>
								<ActionIcon variant='default' size='lg' aria-label='Settings'>
									<BrandTiktok style={{ width: '70%', height: '70%' }} />
								</ActionIcon>
							</Group>
						</div>
					</Grid.Col>
					{/* <Grid.Col span={6}>
						<Image
							h={SECONDARY_COL_HEIGHT}
							radius='md'
							src='https://trade-avto.com/sites/default/files/inline-images/il_570xN.983474098_m9va1-340x340.jpg'
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image
							h={SECONDARY_COL_HEIGHT}
							radius='md'
							src='https://amiel.club/uploads/posts/2022-10/1664873112_1-amiel-club-p-dekor-iz-betona-v-interere-pinterest-1.jpg'
						/>
					</Grid.Col> */}
				</Grid>
			</SimpleGrid>
		</Container>
	)
}
export default HeroSection
