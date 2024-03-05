import { Card, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./ImageCard.module.css";
import { Transition } from "@mantine/core";
import { useEffect, useState } from "react";

type Props = {
  link: string;
  image: string;
  title: string;
};

const ImageCard = ({ link, image, title }: Props) => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, [opened]);
  return (
    <Transition
      mounted={opened}
      transition="fade"
      duration={1200}
      timingFunction="ease"
    >
      {(styles) => (
        <Card
          style={styles}
          p="lg"
          shadow="lg"
          radius={0}
          className={classes.card}
          component={Link}
          to={`catalog/${link}`}
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div>
              <Text className={classes.title} fw={500}>
                {title}
              </Text>
            </div>
          </div>
        </Card>
      )}
    </Transition>
  );
};
export default ImageCard;
