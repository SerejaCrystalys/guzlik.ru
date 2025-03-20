import Content from "../../components/content/content";
import Title from "../../components/title/title";

const HelloTab = () => {
  return (
    <>
      <Title
        value={
          <>
            Hello, I’m Sergey,
            <br /> web-developer
          </>
        }
      />
      <Content
        value={
          <>
            Welcome to my portfolio page! My name is Sergey, and I'm an
            enthusiastic web developer. My projects reflect my passion for
            creating beautiful and functional websites. I'm confident in my
            skills in both front-end and back-end development, and I'm always
            open to new exciting projects and challenges.
          </>
        }
      />
    </>
  );
};

export default HelloTab;
