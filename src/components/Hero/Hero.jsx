import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          LEGION OF VOCALS
        </h1>

        <div className="mt-6 text-cyan-400 text-xl md:text-3xl font-semibold">
          <TypeAnimation
            sequence={[
              "Where Anime Meets Bengali Voices",
              2000,
              "Bangla Anime Dubbing Community",
              2000,
              "Bringing Characters to Life",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-8 text-gray-300 max-w-2xl mx-auto">
          We are a passionate Bangla anime dubbing community dedicated to
          bringing your favorite anime characters to life with high-quality
          Bengali voice acting.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
            🎬 Watch Projects
          </button>

          <button className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            🎤 Join Community
          </button>
        </div>

        <div className="mt-16 animate-bounce text-cyan-400 text-2xl">
          ↓
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;