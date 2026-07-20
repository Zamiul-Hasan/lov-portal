import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gallery from "../../data/gallery";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";

function GalleryPreview() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          title="Gallery"
          subtitle="A glimpse of our dubbing journey."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent"
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[320px] h-56 rounded-2xl overflow-hidden group flex-shrink-0 snap-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link to="/gallery">
            <Button>View Full Gallery</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default GalleryPreview;