import Title from "../../components/title/title";
import config from "../../config.json";
import {
  LinkContainer,
  ProjectContent,
  ProjectItem,
  ProjectsContainer,
} from "./__styled";

const PersonalTab = () => {
  return (
    <>
      <Title value={<>Personal projects</>} top />
      <ProjectsContainer>
        {config.projects.map(
          (item: (typeof config.projects)[0], index: number) => {
            return (
              <ProjectItem key={index}>
                <img src={item.img} alt={item.name} />
                <ProjectContent>
                  <h3>{item.name}</h3>
                  <div>{item.description}</div>
                  <LinkContainer>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      see project
                    </a>
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      source code
                    </a>
                  </LinkContainer>
                </ProjectContent>
              </ProjectItem>
            );
          }
        )}
      </ProjectsContainer>
    </>
  );
};

export default PersonalTab;
