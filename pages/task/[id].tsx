import PageAnimation from "@/components/PageAnimation";
import { useRouter } from "next/router";

const Task = () => {
  const router = useRouter();
  const { id, color, x, y }: any = router.query;

  return (
    <PageAnimation color={color} x={x} y={y}>
      <div>
        Task {id} {color}
      </div>
    </PageAnimation>
  );
};

export default Task;
