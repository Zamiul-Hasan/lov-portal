import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectsHero from "../components/Projects/ProjectsHero";
import ProjectFilter from "../components/Projects/ProjectFilter";
import Footer from "../components/Footer/Footer";
import ProjectSearch from "../components/Projects/ProjectSearch";
import ProjectGrid from "../components/Projects/ProjectGrid";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar />
      <ProjectsHero />

      <ProjectFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectSearch
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

    <ProjectGrid
  activeFilter={activeFilter}
  searchTerm={searchTerm}
/>

      <Footer />
    </>
  );
}

export default Projects;