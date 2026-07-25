import projects from "../../data/projects";

function ProfileProjects({ member }) {
  const memberProjects = projects.filter((project) =>
    project.contributors?.some(
      (contributor) => contributor.memberId === member.id
    )
  );

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white mb-10">
          Projects
        </h2>

        {memberProjects.length === 0 ? (
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-12 text-center">
            <h3 className="text-2xl text-white font-semibold">
              No Projects Yet
            </h3>

            <p className="text-gray-400 mt-3">
              This member hasn't contributed to any projects yet.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {memberProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-3xl bg-slate-800 border border-cyan-500/20 hover:border-cyan-400 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {project.description}
                  </p>

                  <span className="inline-block mt-6 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {project.status}
                  </span>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ProfileProjects;