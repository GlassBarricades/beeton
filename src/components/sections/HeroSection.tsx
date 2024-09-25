import {
  Center,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Paper,
  Container,
  Box,
} from "@mantine/core";
import classes from "./HeroSection.module.css";
import { Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import SocialIcons from "../UI/SocialIcons";
import Logo from "../UI/Logo";

interface IHeroProps {
  image: string
  text: string
}

const HeroSection = ({image, text}: IHeroProps) => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, [opened]);

  console.log(text)
  return (
		<Container fluid>
			<SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
				<Center h={'100%'}>
					<Stack>
						<Transition
							mounted={opened}
							transition='slide-right'
							duration={1200}
							timingFunction='ease'
						>
							{styles => (
								<Box style={styles}>
                  <Logo variant="hero"/>
                </Box>
							)}
						</Transition>
						<Transition
							mounted={opened}
							transition='slide-right'
							duration={1900}
							timingFunction='ease'
						>
							{styles => (
								<Text style={styles} size='xl'>
									{text}
								</Text>
							)}
						</Transition>
					</Stack>
				</Center>
				<Grid gutter='md'>
					<Grid.Col className={classes.heroCard}>
						<Transition
							mounted={opened}
							transition='fade'
							duration={2200}
							timingFunction='ease'
						>
							{styles => (
								<Image
									style={styles}
									className={classes.heroImage}
									src={image}
								/>
							)}
						</Transition>
						<div className={classes.heroGradientOverlay}></div>
						<Paper className={classes.heroSocialIcons}>
							<SocialIcons />
						</Paper>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</Container>
	)
};
export default HeroSection;
