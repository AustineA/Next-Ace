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

      <div></div>
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
