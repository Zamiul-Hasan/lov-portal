import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Trophy,
  FolderKanban,
} from "lucide-react";

function MemberCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 transition duration-300"
    >
      {/* Cover */}
      <div className="relative h-40">
        <img
          src={member.cover}
          alt={member.displayName}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Avatar */}
      <div className="relative flex justify-center">
        <img
          src={member.avatar}
          alt={member.displayName}
          className="-mt-14 w-28 h-28 rounded-full border-4 border-cyan-400 object-cover bg-slate-900"
        />
      </div>

      {/* Info */}
      <div className="px-6 pb-8 text-center">

        <div className="flex justify-center items-center gap-2 mt-4">
          <h2 className="text-2xl font-bold text-white">
            {member.displayName}
          </h2>

          {member.status === "Verified" && (
            <BadgeCheck
              size={22}
              className="text-cyan-400"
            />
          )}
        </div>

        <p className="text-gray-400 mt-2">
          @{member.username}
        </p>

        <div className="mt-5 flex justify-center gap-3 flex-wrap">

          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm border border-cyan-500/30">
            {member.role}
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-300 text-sm border border-slate-700">
            {member.department}
          </span>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <div>
            <FolderKanban
              size={20}
              className="mx-auto text-cyan-400"
            />

            <p className="text-white font-bold mt-2">
              {member.stats.projects}
            </p>

            <p className="text-xs text-gray-400">
              Projects
            </p>
          </div>

          <div>
            <Trophy
              size={20}
              className="mx-auto text-yellow-400"
            />

            <p className="text-white font-bold mt-2">
              {member.stats.points}
            </p>

            <p className="text-xs text-gray-400">
              Points
            </p>
          </div>

          <div>
            <span className="text-xl">⭐</span>

            <p className="text-white font-bold mt-2">
              Lv.{member.level}
            </p>

            <p className="text-xs text-gray-400">
              Level
            </p>
          </div>

        </div>

        <Link
          to={`/team/${member.username}`}
          className="block mt-8"
        >
          <button className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-white">
            View Profile
          </button>
        </Link>

      </div>
    </motion.div>
  );
}

export default MemberCard;