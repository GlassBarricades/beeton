import { Truck, Printer, CameraSelfie, Plus, BuildingStore, Cash } from "tabler-icons-react";
import { Accordion, rem, Title } from "@mantine/core";
import classes from './InfoAccordion.module.css';

interface IInfoProps {
  icon: React.FC<any>;
  title: string;
  value: string;
  content: React.ReactNode;
}

function InfoItem({ icon: Icon, title, value, content }: IInfoProps) {
  return (
    <Accordion.Item value={value}>
      <Accordion.Control
        icon={
          <Icon
            style={{
              color: "var(--mantine-color-gray-6",
              width: rem(30),
              height: rem(30),
            }}
          />
        }
      >
        <Title order={4}>{title}</Title>
      </Accordion.Control>
      <Accordion.Panel>{content}</Accordion.Panel>
    </Accordion.Item>
  );
}

const data = [
  {
    icon: Truck,
    title: "Доставка",
    value: "Truck",
    content:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    icon: Printer,
    title: "Изделия на заказ",
    value: "Printer",
    content:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    icon: CameraSelfie,
    title: "Уход",
    value: "CameraSelfie",
    content:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    icon: BuildingStore,
    title: "Шоурум",
    value: "showroom",
    content:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    icon: Cash,
    title: "Оплата",
    value: "cash",
    content:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

const InfoAccordion = () => {
  const items = data.map((item, indx) => {
    return (
      <InfoItem {...item}  key={indx}/>
    );
  });
  return (
    <Accordion variant="filled" radius={0} transitionDuration={500} classNames={{ chevron: classes.chevron }}
    chevron={<Plus className={classes.icon} />}>
      {items}
    </Accordion>
  );
};
export default InfoAccordion;
