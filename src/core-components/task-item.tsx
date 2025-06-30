import { cx } from 'class-variance-authority';
import { useState } from 'react';
import CheckIcon from '../assets/icons/check.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import { ButtonIcon } from '../components/button-icon';
import { Card } from '../components/card';
import { Checkbox } from '../components/checkbox';
import { Input } from '../components/input';
import { Text } from '../components/text';
import { type Task, TaskState } from '../models/task';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.state === TaskState.Creating);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <Checkbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />

          <Text className={cx('flex-1', { 'line-through': task?.concluded })}>
            {task?.title}
          </Text>

          <div className="flex items-center gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <Input className="flex-1" />

          <div className="flex items-center gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
