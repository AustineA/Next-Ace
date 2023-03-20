import Back from "@/components/icons/Back";
import Elipse from "@/components/icons/Elipse";
import PageAnimation from "@/components/PageAnimation";
import Header from "@/components/ui/Header";
import { statusBarHeight } from "@/services/helper";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "@/services/data";
import { Project } from "@/services/types";

const Task = () => {
  const router = useRouter();
  const { id, color, x, y }: any = router.query;
  const [top, setTop] = useState(0);
  const [project, setProject] = useState<Project>();

  const getTask = () => {
    const proj = projects.find((item) => item.id == id);
    setProject(proj);
  };

  useEffect(() => {
    statusBarHeight().then((h) => {
      setTop(h);
    });
  }, []);

  useEffect(() => {
    getTask();
  }, [id]);

  return (
    <PageAnimation color={color} x={x} y={y} top={top}>
      <PageHeader>
        <Header>
          <div className="first">
            <div className="titleHolder">
              <motion.div
                onClick={() => {
                  router.push("/");
                }}
                whileTap={{
                  scale: 0.85,
                  opacity: 0.85,
                }}
              >
                <Back />
              </motion.div>
              <h3>{project?.title}</h3>
            </div>
          </div>
          <div className="last">
            <Elipse />
          </div>
        </Header>
      </PageHeader>

      <TaskContent>
        <div className="meta">
          <div className="meta-title">
            <h2>Things to do</h2>
            <span>2/10</span>
          </div>
          <span className="meta-date">Created: Wed 8 Mar. 23</span>
        </div>
        <div className="description">
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>
      </TaskContent>
    </PageAnimation>
  );
};

export default Task;

const PageHeader = styled.div`
  .titleHolder {
    display: flex;

    h3 {
      margin: 0;
      margin-left: 1.5rem;
      font-weight: 500;
      font-size: 1.8rem;
    }
  }
  .first {
    justify-content: start;
    width: 70%;
    height: 4rem;
    display: flex;
    align-items: center;
  }
  .last {
    justify-content: end;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
  }
`;

const TaskContent = styled.div`
  margin-top: 1rem;
  color: var(--text-secondary);

  .meta-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
      font-size: 3rem;
      font-weight: 500;
      color: var(--text);
    }

    span {
    }
  }

  .meta-date {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;
