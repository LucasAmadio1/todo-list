import { cx } from 'class-variance-authority';
import React from 'react';
import CheckIcon from '../assets/icons/check.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import { ButtonIcon } from '../components/button-icon';
import { Card } from '../components/card';
import { Checkbox } from '../components/checkbox';
import { Input } from '../components/input';
import { Text } from '../components/text';
import { useTask } from '../hooks/use-task';
import { type Task, TaskState } from '../models/task';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating,
  );
  const [taskTitle, setTaskTitle] = React.useState(task.title || '');
  const { updateTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '');
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ id: task.id, title: taskTitle });

    updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <Checkbox
            value={task.concluded?.toString()}
            checked={task.concluded}
          />
          <Text className={cx('flex-1', { 'line-through': task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <Input
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              type="button"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
