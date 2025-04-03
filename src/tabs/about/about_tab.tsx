import Content from "../../components/content/content";
import Title from "../../components/title/title";
import config from "../../config.json";

const AboutTab = () => {
  console.log(config);

  return (
    <>
      <Title value={<>About me</>} />
      <Content
        value={
          <> {config.about}</>

          // <>
          //   My passion is crafting beautiful and functional user interfaces.
          //   With experience in HTML, CSS, JavaScript, and the React framework, I
          //   aim to make web applications adaptive and user-friendly. I enjoy
          //   diving into the world of browser technologies, creating web
          //   solutions that amaze and inspire.
          // </>
        }
      />
    </>
  );
};

export default AboutTab;
