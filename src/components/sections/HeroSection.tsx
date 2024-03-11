import {
  Center,
  Container,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Image,
  ActionIcon,
  Group,
} from "@mantine/core";
import classes from "./HeroSection.module.css";
import { BrandTelegram, BrandInstagram, BrandTiktok } from "tabler-icons-react";
import { Transition } from "@mantine/core";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, [opened]);
  return (
    <Container fluid>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Center h={"100%"}>
            <Stack>
              <Transition
                mounted={opened}
                transition="slide-right"
                duration={1200}
                timingFunction="ease"
              >
                {(styles) => (
                  <Title style={styles} className={classes.heroLogo}>
                    BEETON.BY
                  </Title>
                )}
              </Transition>
              <Transition
                mounted={opened}
                transition="slide-right"
                duration={1900}
                timingFunction="ease"
              >
                {(styles) => (
                  <Text style={styles} size="xl">
                    Мастерская бетонных изделий: горшки, кашпо и декор
                  </Text>
                )}
              </Transition>
            </Stack>
          </Center>
        <Grid gutter="md">
          <Grid.Col className={classes.heroCard}>
            <Transition
              mounted={opened}
              transition="fade"
              duration={2200}
              timingFunction="ease"
            >
              {(styles) => (
                <Image
                  style={styles}
                  className={classes.heroImage}
                  src="https://amiel.club/uploads/posts/2022-10/1664873112_1-amiel-club-p-dekor-iz-betona-v-interere-pinterest-1.jpg"
                />
              )}
            </Transition>
            <div className={classes.heroGradientOverlay}></div>
            <div className={classes.heroSocialIcons}>
              <Group>
                <ActionIcon variant="default" size="lg" aria-label="Settings">
                  <BrandTelegram style={{ width: "70%", height: "70%" }} />
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="Settings">
                  <BrandInstagram style={{ width: "70%", height: "70%" }} />
                </ActionIcon>
                <ActionIcon variant="default" size="lg" aria-label="Settings">
                  <BrandTiktok style={{ width: "70%", height: "70%" }} />
                </ActionIcon>
              </Group>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
export default HeroSection;
