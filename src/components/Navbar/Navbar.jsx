import logo from "../../assets/images/logos/logo.png";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="LOV Logo"
            className="w-14 h-14 object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] transition duration-300 hover:scale-150"
          />

          <div>
            <p>          </p>
            <h1 className="text-white font-bold text-xl tracking-wide">
              LEGION OF VOCALS
            </h1>

            <p className="text-cyan-400 text-xs">
              Anime Bangla Dubbing
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link to="/team" className="hover:text-cyan-400 transition">
            Team
          </Link>

          <Link to="/gallery" className="hover:text-cyan-400 transition">
            Gallery
          </Link>

          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu />
        </button>

      </div>
    </header>
  );
}

export default Navbar;