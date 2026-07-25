import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";

import Team from "../pages/Team";
import MemberProfile from "../pages/MemberProfile";

import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />

      <Route path="/team" element={<Team />} />
      <Route path="/team/:username" element={<MemberProfile />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Admin */}
      <Route path="/admin" element={<Admin />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;