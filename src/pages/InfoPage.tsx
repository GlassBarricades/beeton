import { Container } from "@mantine/core";
import InfoAccordion from "../components/UI/InfoAccordion";
import useFetchSortedData from "../hooks/useFetchSortedData";
import FooterSection from "../components/sections/FooterSection";

const InfoPage = () => {
  const [information, loading] = useFetchSortedData({
    url: "/information",
    field: "position",
  });
  return (
    <>
    <Container mt="xl" mih={"70vh"}>
      {!loading ? (
        <InfoAccordion data={information} variant="default" />
      ) : (
        "Загрузка ..."
      )}
    </Container>
    <FooterSection />
    </>
  );
};
export default InfoPage;
