import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Award } from "lucide-react";

function ProfileBanner({ member }) {
  return (
    <section className="relative h-[520px] overflow-hidden">
      {/* Cover */}
      <img
        src={member.cover}
        alt={member.displayName}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-14">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center md:items-end gap-8"
          >
            {/* Avatar */}
            <img
              src={member.avatar}
              alt={member.displayName}
              className="w-44 h-44 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
            />

            {/* Info */}
            <div className="flex-1 text-center md:text-left">

              <h1 className="text-5xl font-black text-white">
                {member.displayName}
              </h1>

              <p className="mt-2 text-cyan-400 text-xl">
                {member.role}
              </p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
                  {member.department}
                </span>

                <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 flex items-center gap-2">
                  <Award size={18} />
                  Level {member.level}
                </span>

                <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 flex items-center gap-2">
                  <ShieldCheck size={18} />
                  {member.status}
                </span>

              </div>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-8 text-gray-300">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  Joined {member.joined}
                </div>

                <div>
                  ⭐ {member.stats.points} Points
                </div>

                <div>
                  🎙 {member.stats.projects} Projects
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;