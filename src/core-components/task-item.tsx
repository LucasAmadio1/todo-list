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

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

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
          <Checkbox />

          <Text className="flex-1">🛒 Fazer compras da semana</Text>

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
