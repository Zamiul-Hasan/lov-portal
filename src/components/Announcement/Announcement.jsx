import announcements from "../../data/announcements";

function Announcement() {
  return (
    <section className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          📢 Latest Announcements
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-cyan-500/20 bg-slate-800 p-6 hover:border-cyan-400 transition"
            >
              <span className="text-cyan-400 text-sm">
                {item.date}
              </span>

              <h3 className="text-white font-semibold mt-3">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcement;