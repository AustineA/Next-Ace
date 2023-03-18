import styled from "styled-components";
import Card from "@/components/Card";
import { projects } from "@/services/data";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();

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
            router.push("/task/" + project.id);
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
