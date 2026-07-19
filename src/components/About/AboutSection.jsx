import { motion } from "framer-motion";
import Container from "../UI/Container";

function AboutSection() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <span className="text-cyan-400 font-semibold uppercase tracking-widest">
              About LOV
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Giving Anime Characters a Bengali Voice
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Legion of Vocals is a passionate Bangladeshi anime dubbing
              community dedicated to producing high-quality Bengali voice acting,
              bringing unforgettable anime moments closer to local audiences.
            </p>

            <p className="mt-6 text-gray-400">
              From talented voice actors to editors, sound engineers, and
              translators—we work together to make every project memorable.
            </p>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl flex items-center justify-center">
              <span className="text-7xl">🎙️</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutSection;