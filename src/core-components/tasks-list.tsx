import PlusIcon from '../assets/icons/plus.svg?react';
import { Button } from '../components/button';
import { useTasks } from '../hooks/use-tasks';
import { TaskItem } from './task-item';

export function TaksList() {
  const { tasks } = useTasks();

  console.log(tasks);

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
