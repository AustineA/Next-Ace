import Content from "@/components/Content";
import { useRouter } from "next/router";

const Task = () => {
  const router = useRouter();
  const { id, color } = router.query;

  return (
    <Content>
      <div>
        Task {id} {color}
      </div>
    </Content>
  );
};

export default Task;
