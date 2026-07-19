import projects from "../../data/projects";

function FeaturedProjects() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Ongoing":
        return "bg-yellow-500";
      case "Upcoming":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-3">
            Explore our latest Bangla anime dubbing projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm text-white ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>

                <h3 className="text-white text-2xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <button className="mt-6 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
                  View Project
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;