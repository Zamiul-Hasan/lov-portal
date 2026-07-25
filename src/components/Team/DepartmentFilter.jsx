import members from "../../data/members";

function DepartmentFilter({ selected, onChange }) {
  const departments = [
    "All",
    ...new Set(members.map((member) => member.department)),
  ];

  return (
    <section className="bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-4">

          {departments.map((department) => (
            <button
              key={department}
              onClick={() => onChange(department)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-300
                ${
                  selected === department
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-900 border border-cyan-500/20 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
            >
              {department}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default DepartmentFilter;