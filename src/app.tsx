import { BrowserRouter, Route, Routes } from 'react-router';
import { Components } from './pages/components';
import { Home } from './pages/home';
import { LayoutMain } from './pages/layout-main';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
