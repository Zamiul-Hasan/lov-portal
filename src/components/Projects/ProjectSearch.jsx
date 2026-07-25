import { Search } from "lucide-react";

function ProjectSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-xl mx-auto px-6 mb-12">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-900 border border-cyan-500/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition"
        />
      </div>
    </div>
  );
}

export default ProjectSearch;