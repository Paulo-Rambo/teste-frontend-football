import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/Dashboard";
import PaisesPage from "../pages/Paises";
import ContinentsList from "../components/continentList";

export default function ManagerRoutes() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<ContinentsList />} />
          <Route path="paises" element={<PaisesPage />} />
        </Route>
        <Route path="notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
