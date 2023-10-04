import styled from "styled-components";

import { projects } from "@/services/data";
import Router from "next/router";
import Card from "./card";

const Projects = () => {
  const handleClick = (event, project) => {
    const x = event.clientX + "px";
    const y = event.clientY + "px";
    console.log("Clicked at coordinates (" + x + ", " + y + ")");

    Router.push(
      {
        pathname: "/task/" + project?.id,
        query: {
          color: project?.color,
          x,
          y,
        },
      },
      "/task/" + project?.id
    );
  };

  return (
    <ProjectPage>
      {projects.map((project) => (
        <Card
          key={project?.id}
          title={project?.title}
          done={project.done}
          total={project.total}
          percentDone={project?.percentDone}
          color={project?.color}
          openTask={(e) => {
            handleClick(e, project);
          }}
        />
      ))}
    </ProjectPage>
  );
};

export default Projects;

const ProjectPage = styled.section`
  margin-top: 5rem;
`;
