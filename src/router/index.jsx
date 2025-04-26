import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Ingredients from '../pages/Ingredients';
// import DashboardPage from '../pages/DashboardPage'; // untuk nanti

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ingredients" element={<Ingredients />} />
        {/* Tambahkan rute lainnya nanti */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
