import { Container } from '../components/container';
import { TaksList } from '../core-components/tasks-list';
import { TasksSummary } from '../core-components/tasks-summary';

export function Home() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <TaksList />
    </Container>
  );
}
