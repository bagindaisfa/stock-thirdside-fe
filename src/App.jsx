import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutWrapper from './layout/LayoutWrapper';
import Dashboard from './pages/Dashboard';
import Ingredients from './pages/Ingredients';
import Reports from './pages/Reports';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <Dashboard />
            </LayoutWrapper>
          }
        />
        <Route
          path="/ingredients"
          element={
            <LayoutWrapper>
              <Ingredients />
            </LayoutWrapper>
          }
        />
        <Route
          path="/reports"
          element={
            <LayoutWrapper>
              <Reports />
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
