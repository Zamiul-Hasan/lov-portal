function ProjectFilter({ activeFilter, setActiveFilter }) {
  const filters = ["All", "Ongoing", "Completed", "Upcoming"];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeFilter === filter
              ? "bg-cyan-500 text-black"
              : "bg-slate-800 text-white hover:bg-cyan-500 hover:text-black"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;