import {
  Users,
  Mic2,
  Building2,
  BadgeCheck,
} from "lucide-react";

function TeamStats({ members = [] }) {
  const totalMembers = members.length;

  const voiceActors = members.filter(
    (member) => member.department === "Voice Actor"
  ).length;

  const totalDepartments = new Set(
    members.map((member) => member.department)
  ).size;

  const verifiedMembers = members.filter(
    (member) => member.status === "Verified"
  ).length;

  const stats = [
    {
      title: "Total Members",
      value: totalMembers,
      icon: Users,
    },
    {
      title: "Voice Actors",
      value: voiceActors,
      icon: Mic2,
    },
    {
      title: "Departments",
      value: totalDepartments,
      icon: Building2,
    },
    {
      title: "Verified Members",
      value: verifiedMembers,
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 text-center hover:border-cyan-400 transition duration-300"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                    <Icon
                      size={30}
                      className="text-cyan-400"
                    />
                  </div>
                </div>

                <h2 className="mt-6 text-4xl font-black text-white">
                  {stat.value}
                </h2>

                <p className="mt-2 text-gray-400">
                  {stat.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default TeamStats;