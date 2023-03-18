import styled from "styled-components";
import Card from "@/components/Card";
import { projects } from "@/services/data";

const Projects = () => {
  return (
    <ProjectPage>
      {projects.map((project) => (
        <Card
          title={project?.title}
          done={project.done}
          total={project.total}
          percentDone={project?.percentDone}
          color={project?.color}
        />
      ))}
    </ProjectPage>
  );
};

export default Projects;

const ProjectPage = styled.section`
  margin-top: 5rem;
`;
