import useLocalStorage from 'use-local-storage';
import { TASKS_KEY, type Task, TaskState } from '../models/task';

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: '',
        state: TaskState.Creating,
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task['title'] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task,
      ),
    );
  }

  return { prepareTask, updateTask };
}
