import Container from "../UI/Container";

function ProjectContributors({ contributors }) {
  return (
    <section className="bg-slate-950 py-20">
      <Container>
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contributors
        </h2>

        {contributors.length === 0 ? (
          <p className="text-center text-gray-400">
            Contributors will be announced soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((person) => (
              <div
                key={person.id}
                className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <img
                  src={person.avatar}
                  alt={person.memberName}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-cyan-500"
                />

                {/* Name */}
                <h3 className="mt-5 text-center text-xl font-bold text-white">
                  {person.memberName}
                </h3>

                {/* Role */}
                <p className="text-center text-cyan-400 mt-2">
                  {person.role}
                </p>

                {/* Character */}
                {person.character && (
                  <p className="text-center text-gray-300 mt-2">
                    Character: <span className="font-medium">{person.character}</span>
                  </p>
                )}

                {/* Member ID */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  Member ID: #{person.memberId}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProjectContributors;