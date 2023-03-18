import { useRouter } from "next/router";

const Task = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Task {id}</div>;
};

export default Task;
