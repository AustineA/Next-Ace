import PageAnimation from "@/components/PageAnimation";
import { statusBarHeight } from "@/services/helper";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Task = () => {
  const router = useRouter();
  const { id, color, x, y }: any = router.query;
  const [top, setTop] = useState(0);

  useEffect(() => {
    statusBarHeight().then((h) => {
      setTop(h);
    });
  }, []);

  return (
    <PageAnimation color={color} x={x} y={y} top={top}>
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        Task {id} {color}
      </div>
    </PageAnimation>
  );
};

export default Task;
