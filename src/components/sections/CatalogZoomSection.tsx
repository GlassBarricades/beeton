import { SimpleGrid, Grid, Card, AspectRatio, Image, Group, Text, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from './CatalogZoomSection.module.css'

const CatalogZoomSection = () => {
    const mockdata = [
        {
            title: 'Top 10 places to visit in Norway this summer',
            image:
                'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'August 18, 2022',
        },
        {
            title: 'Best forests to visit in North America',
            image:
                'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'August 27, 2022',
        },
        {
            title: 'Hawaii beaches review: better than you think',
            image:
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'September 9, 2022',
        },
        {
            title: 'Mountains at night: 12 best locations to enjoy the view',
            image:
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'September 12, 2022',
        },
        {
            title: 'Top 10 places to visit in Norway this summer',
            image:
                'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'August 18, 2022',
        },
        {
            title: 'Best forests to visit in North America',
            image:
                'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'August 27, 2022',
        },
        {
            title: 'Hawaii beaches review: better than you think',
            image:
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'September 9, 2022',
        },
        {
            title: 'Mountains at night: 12 best locations to enjoy the view',
            image:
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'September 12, 2022',
        },
        {
            title: 'Top 10 places to visit in Norway this summer',
            image:
                'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
            date: 'August 18, 2022',
        },
    ]

    const cards = mockdata.map((article, indx) => (
		<Card
			key={indx}
			component={Link}
			radius={0}
			p={0}
			to='/'
			className={classes.card}
		>
			<AspectRatio ratio={4 / 3}>
				<Image src={article.image} />
			</AspectRatio>
			<Group p='md' justify='space-between'>
				<Text className={classes.title}>Название продукта</Text>
				<Text c='dimmed' size='xs' tt='uppercase' fw={700}>
					15р
				</Text>
			</Group>
		</Card>
	))

  return (
    <Container fluid mt="xl">
    <Grid>
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
        <SimpleGrid cols={{ base: 3, md: 3 }}>
            {cards}
        </SimpleGrid>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
        <SimpleGrid className={classes.gridWrap}>
      <Card
			component={Link}
			radius={0}
			p={0}
			to='/'
			className={classes.cardLeft}
		>
				<Image className={classes.image} src='https://kakpostroit.su/wp-content/uploads/2019/02/1551042989_kashpo_iz_czementa_1551042974_5c73099eef0bb.jpg' />
			<Group p='md' justify='space-between'>
				<Text className={classes.title}>Название продукта</Text>
				<Text c='dimmed' size='xs' tt='uppercase' fw={700}>
					15р
				</Text>
			</Group>
		</Card>
        </SimpleGrid>
      </Grid.Col>
    </Grid>
    </Container>
  );
};
export default CatalogZoomSection;
