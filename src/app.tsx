import CheckIcon from './assets/icons/check.svg?react';
import PencilIcon from './assets/icons/pencil.svg?react';
import PlusIcon from './assets/icons/plus.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import TrashIcon from './assets/icons/trash.svg?react';
import XIcon from './assets/icons/x.svg?react';
import { Badge } from './components/badge';
import { Button } from './components/button';
import { ButtonIcon } from './components/button-icon';
import { Card } from './components/card';
import { Checkbox } from './components/checkbox';
import { Container } from './components/container';
import { Icon } from './components/icon';
import { Input } from './components/input';
import { Text } from './components/text';

export function App() {
  return (
    <Container>
      <div className="flex flex-col gap-10 p-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
          <Text>Levar o dog pra passear</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
        </div>

        <div>
          <Input />
        </div>

        <div>
          <Checkbox />
        </div>

        <div>
          <Card size="md">Hello world!</Card>
        </div>
      </div>
    </Container>
  );
}
