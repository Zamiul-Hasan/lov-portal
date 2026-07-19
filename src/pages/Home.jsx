import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Announcement from "../components/Announcement/Announcement";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Announcement />
      <FeaturedProjects />
    </>
  );
}

export default Home;