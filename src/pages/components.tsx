import CheckIcon from '../assets/icons/check.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import PlusIcon from '../assets/icons/plus.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import { Badge } from '../components/badge';
import { Button } from '../components/button';
import { ButtonIcon } from '../components/button-icon';
import { Card } from '../components/card';
import { Checkbox } from '../components/checkbox';
import { Container } from '../components/container';
import { Icon } from '../components/icon';
import { Input } from '../components/input';
import { Skeleton } from '../components/skeleton';
import { Text } from '../components/text';

export function Components() {
  return (
    <Container>
      <div className="flex flex-col gap-10 p-10">
        <div className="flex gap-4 items-center">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div className="items-center flex gap-3">
          <Badge variant="secondary">5</Badge>
          <Badge variant="secondary" loading>
            5
          </Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge variant="primary" loading>
            2 de 5
          </Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1 items-center">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />

          <ButtonIcon icon={TrashIcon} variant="primary" loading />
        </div>

        <div>
          <Input />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox />
          <Checkbox loading />
        </div>

        <div>
          <Card size="md">Hello world!</Card>
        </div>

        <div className="space-y-2.5">
          <Skeleton className="h-8" rounded="full" />
          <Skeleton className="h-8" rounded="lg" />
          <Skeleton className="w-96 h-8" rounded="sm" />
        </div>
      </div>
    </Container>
  );
}
