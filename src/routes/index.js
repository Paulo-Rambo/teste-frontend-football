import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/Dashboard";

export default function ManagerRoutes() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notfound" element={<NotFoundPage />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
