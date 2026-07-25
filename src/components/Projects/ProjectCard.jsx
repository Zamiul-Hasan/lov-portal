import { Link } from "react-router-dom";
import Button from "../UI/Button";

function ProjectCard({ project }) {
  const statusColors = {
    Ongoing: "bg-yellow-500",
    Completed: "bg-green-500",
    Upcoming: "bg-blue-500",
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">
      {/* Poster */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
            statusColors[project.status] || "bg-gray-500"
          }`}
        >
          {project.status}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-400 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-6">
          <Link to={`/projects/${project.id}`}>
            <Button className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;