import { Link } from "react-router-dom";
import Container from "../UI/Container";

function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              LEGION OF VOCALS
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Bringing anime characters to life through professional-quality
              Bangla voice acting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Community
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Discord</p>
              <p>Facebook</p>
              <p>YouTube</p>
              <p>Email</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cyan-500/20 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Legion of Vocals. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;