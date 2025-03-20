import { ProjectCarousel } from "./utils/carousel/carousel";

import { ProjectContent, ProjectInfo, ProjectRole } from "./__styled";
import { useMemo } from "react";
import Title from "../../components/title/title";
import Content from "../../components/content/content";

const ProjectsTab = () => {
  const projects = useMemo(() => {
    return [
      {
        name: "Aino.World",
        link: "aino.world",
        content:
          "is a significant project that reflects my skills and experience in frontend development. This web platform is a Geographic Information System (GIS) with an emphasis on collaborative interaction.",
        role: "My role",
        role_content:
          "in this project involved creating and optimizing the user interface, ensuring smooth interaction between users and geospatial data.",
      },
    ];
  }, []);

  return (
    <>
      <Title value={<>Projects</>} top />

      {projects.map((item: any, index: number) => {
        return (
          <ProjectContent key={index}>
            <ProjectCarousel name={item.name} />
            <ProjectInfo>
              <h2>
                <a
                  href={`http://${item.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              </h2>
              <Content value={item.content} />
            </ProjectInfo>
            <ProjectRole>
              <h2>{item.role}</h2>
              <Content value={item.role_content} />
            </ProjectRole>
          </ProjectContent>
        );
      })}
    </>
  );
};

export default ProjectsTab;
