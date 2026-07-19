import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Announcement from "../components/Announcement/Announcement";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import AboutSection from "../components/About/AboutSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <AboutSection />
      <Announcement />
      <FeaturedProjects />
    </>
  );
}

export default Home;