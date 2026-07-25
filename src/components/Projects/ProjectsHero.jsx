import { motion } from "framer-motion";
import Button from "../UI/Button";
import Container from "../UI/Container";

function ProjectsHero() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Legion of Vocals
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-black text-white">
            Our Projects
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-gray-300 leading-8 text-lg">
            Explore our completed, ongoing, and upcoming Bangla anime dubbing
            projects. Every project is created with passion, teamwork, and
            dedication by the Legion of Vocals community.
          </p>

          <div className="mt-10">
            <Button size="lg">
              Explore Projects
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectsHero;