import { Button } from './Button';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}