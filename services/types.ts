export interface Project {
  id: string | number;
  title: string;
  done: number;
  total: number;
  percentDone: number;
  color?: string;
  createdAt?: string;
  dueDate?: string;
  description?: string;
  tasks?: Object[];
}
