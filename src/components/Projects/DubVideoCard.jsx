import { motion } from "framer-motion";
import { Play, Clock, Eye, Heart } from "lucide-react";

function DubVideoCard({ video }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-56 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center">
            <Play
              className="text-white ml-1"
              size={28}
              fill="white"
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {video.title}
        </h3>

        {/* Upload Info */}
        <p className="text-sm text-gray-400 mt-2">
          Uploaded by{" "}
          <span className="text-cyan-400">
            {video.uploadedBy}
          </span>
        </p>

        {/* Duration + Date */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {video.duration}
          </span>

          <span>{video.uploadDate}</span>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Eye size={16} />
            {video.views}
          </span>

          <span className="flex items-center gap-2">
            <Heart size={16} />
            {video.likes}
          </span>
        </div>

        {/* Watch Button */}
        <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 transition py-3 rounded-xl font-semibold text-white">
          ▶ Watch Dub
        </button>
      </div>
    </motion.div>
  );
}

export default DubVideoCard;