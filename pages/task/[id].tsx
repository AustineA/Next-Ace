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
import { Squircle } from "corner-smoothing";
import BackgroundFiller from "@/components/ui/BackgroundFiller";

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
      <BackgroundFiller color={color} top={top} />
      <PageHeader>
        <Header color={color} top={top}>
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
      <PageContent>
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

        <TaskContainer cornerRadius={30} initial={{}}>
          <div className="task-container-inner">
            <ul>
              <li>
                <div className="check-box"></div>
                <span className="task-item-title">Some new taxt</span>
              </li>
              <li>
                <div className="check-box"></div>
                <span className="task-item-title">
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </span>
              </li>
              <li>
                <div className="check-box"></div>
                <span className="task-item-title">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </span>
              </li>
            </ul>
          </div>
        </TaskContainer>
      </PageContent>
    </PageAnimation>
  );
};

export default Task;

const PageContent = styled.div`
  margin-top: 5rem;
`;

const TaskContainer = styled(motion(Squircle))`
  background: var(--task-bg);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  .check-box {
    width: 2rem;
    height: 2rem;
    border-radius: 0.8rem;
    border: 0.2rem solid var(--text);
  }

  .task-item-title {
    width: 90%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1.5rem 0;
    font-weight: 300;
    color: var(--text-secondary);
    font-size: 1.7rem;
    border-bottom: 0.1rem dashed #a5aa99;
    display: flex;
    justify-content: space-between;

    &:last-child {
      border-bottom: none;
      padding-bottom: 1rem;
    }

    &:first-child {
      padding-top: 1rem;
    }
  }
`;

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
    font-size: 1.46rem;
    margin-top: 2rem;
  }
`;
