import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="pt-40 text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          LEGION OF VOCALS
        </h1>

        <p className="text-gray-300 mt-5 text-xl">
          Where Anime Meets Bengali Voices
        </p>
      </div>
    </div>
  );
}

export default Home;