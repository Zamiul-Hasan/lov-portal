import Container from "../UI/Container";

function ProjectInfo({ project }) {
  return (
    <section className="py-20 bg-slate-950">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Poster */}
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Information */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-white">
              About This Project
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              {project.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-900 rounded-xl p-5 border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold">
                  Status
                </h3>

                <p className="text-white mt-2">
                  {project.status}
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold">
                  Category
                </h3>

                <p className="text-white mt-2">
                  {project.category || "Anime Dub"}
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold">
                  Episodes
                </h3>

                <p className="text-white mt-2">
                  {project.episodes || "TBA"}
                </p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold">
                  Release
                </h3>

                <p className="text-white mt-2">
                  {project.releaseDate || "Coming Soon"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectInfo;