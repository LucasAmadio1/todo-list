import PlusIcon from '../assets/icons/plus.svg?react';
import { Button } from '../components/button';
import { useTask } from '../hooks/use-task';
import { useTasks } from '../hooks/use-tasks';
import { TaskState } from '../models/task';
import { TaskItem } from './task-item';

export function TaksList() {
  const { tasks } = useTasks();

  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
