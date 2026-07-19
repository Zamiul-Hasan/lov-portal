import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import HeroStats from "./HeroStats";
import StarBackground from "../Effects/StarBackground";
import heroVideo from "../../assets/videos/hero-bg.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen pt-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">

      {/* Star Background */}
      <StarBackground />

      {/* Animated Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]">
          LEGION OF VOCALS
        </h1>

        {/* Animated Subtitle */}
        <div className="mt-6 text-cyan-400 text-xl md:text-3xl font-bold">
          <TypeAnimation
            sequence={[
              "Where Anime Meets Bengali Voices",
              2000,
              "Bangla Anime Dubbing Community",
              2000,
              "Bringing Characters To Life",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
          We are a passionate Bangla anime dubbing organization dedicated to
          bringing your favorite anime characters to life through
          professional-quality Bengali voice acting.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Button size="lg">
            🎬 Watch Projects
          </Button>

          <Button variant="secondary" size="lg">
            🎤 Join Community
          </Button>
        </div>

        {/* Hero Stats */}
        <HeroStats />

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-16 text-cyan-400 text-4xl select-none"
        >
          ↓
        </motion.div>
      </motion.div>
      {/* Background Video */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40"></div>

    </section>
  );
}

export default Hero;