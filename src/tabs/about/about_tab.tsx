import Content from "../../components/content/content";
import Title from "../../components/title/title";
import config from "../../config.json";

const AboutTab = () => {
  return (
    <>
      <Title value={<>About me</>} />
      <Content value={<>{config.about}</>} />
    </>
  );
};

export default AboutTab;
