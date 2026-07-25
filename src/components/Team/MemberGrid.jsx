import MemberCard from "./MemberCard";

function MemberGrid({ members }) {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {members.length === 0 ? (
          <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              No Members Found
            </h2>

            <p className="text-gray-400 mt-4">
              Try changing your search or department filter.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default MemberGrid;