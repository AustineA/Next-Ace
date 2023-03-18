import styled from "styled-components";
import Card from "@/components/Card";
import { projects } from "@/services/data";
import Router from "next/router";

const Projects = () => {
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
          openTask={() => {
            Router.push(
              {
                pathname: "/task/" + project.id,
                query: {
                  color: project.color,
                },
              },
              "/task/" + project.id
            );
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
