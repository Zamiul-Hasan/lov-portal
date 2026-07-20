import { motion } from "framer-motion";
import Container from "../UI/Container";
import Button from "../UI/Button";

function AboutSection() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-semibold uppercase tracking-widest">
              About LOV
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Giving Anime Characters a Bengali Voice
            </h2>

            <p className="mt-8 text-gray-300 leading-8">
              Legion of Vocals (LOV) is a passionate Bangla anime dubbing
              community dedicated to bringing your favorite anime stories to
              life through high-quality Bengali voice acting.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Our team consists of talented voice actors, translators,
              editors, sound engineers, and designers who work together to
              create unforgettable experiences for anime fans.
            </p>

            <Button className="mt-8">
              Learn More
            </Button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md h-96 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center">
              <span className="text-7xl">🎙️</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;