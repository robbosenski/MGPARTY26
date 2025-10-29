import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PoliciesPage } from './pages/PoliciesPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/policies" element={<PoliciesPage />} />
    </Routes>
  );
}
