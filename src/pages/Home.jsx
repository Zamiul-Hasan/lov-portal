import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Announcement from "../components/Announcement/Announcement";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import AboutSection from "../components/About/AboutSection";
import GalleryPreview from "../components/Gallery/GalleryPreview";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <AboutSection />
      <Announcement />
      <FeaturedProjects />
       <GalleryPreview />
    </>
  );
}

export default Home;