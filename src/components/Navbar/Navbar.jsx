import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500"></div>

          <div>
            <h1 className="text-white font-bold text-xl">
              LEGION OF VOCALS
            </h1>

            <p className="text-cyan-400 text-xs">
              Anime Bangla Dubbing
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Team</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>

        <button className="md:hidden text-white">
          <Menu />
        </button>

      </div>
    </header>
  );
}

export default Navbar;