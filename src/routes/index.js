import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/Dashboard";
import CountrysPage from "../pages/CountrysPage";
import Index from "../pages/Index";
import SeasonPage from "../pages/SeasonPage";
import LeaguesPage from "../pages/LeaguesPage";
import TeamsPage from "../pages/TeamsPage";
import PlayersPage from "../pages/PlayersPage";
import TeamStatisticPage from "../pages/TeamStatisticsPage";

export default function ManagerRoutes() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<CountrysPage />} />
          <Route path="paises" element={<CountrysPage />} />
          <Route path="seasons" element={<SeasonPage />} />
          <Route path="leagues" element={<LeaguesPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="players" element={<PlayersPage />} />
          <Route path="statistics" element={<TeamStatisticPage />} />
        </Route>
        <Route path="*" element={<Index />} />

        <Route path="notfound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
