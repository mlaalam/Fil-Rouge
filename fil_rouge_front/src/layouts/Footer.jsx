import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1324] to-[#060b18] text-gray-300 bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img
              src={logo}
              alt="KhadmaLink"
              className="h-10 w-10"
            /> */}
            <img className="h-16 w-auto rounded-lg" src={logo} alt="image logo" />
            <span className="text-white text-lg font-semibold">
              KhadmaLink
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            La plateforme qui connecte <br />
            les clients aux meilleurs <br />
            artisans du Maroc.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Accueil</li>
            <li className="hover:text-white cursor-pointer">Services</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Plomberie</li>
            <li>Électricité</li>
            <li>Serrurerie</li>
            <li>Climatisation</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-3">
            <a className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600">
              <FaFacebookF />
            </a>
            <a className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600">
              <FaInstagram />
            </a>
            <a className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <p className="text-center text-sm py-4 text-gray-400">
          © 2025 KhadmaLink. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
