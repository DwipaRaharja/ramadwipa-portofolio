import { navLinks } from "../data/navigation";
import SocialLinks from "../components/ui/SocialLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary w-full px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.35fr_0.7fr_1fr]">
        <div>
          <Link
            to="/#home"
            className="inline-block rounded font-bold italic focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="text-3xl">Ramadwipa.</span>
          </Link>
          <p className="mt-2 text-xl font-medium sm:text-2xl">
            Full Stack Developer
          </p>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-white/80 sm:text-lg">
            Building digital solutions for modern businesses.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-4 flex flex-col items-start gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="rounded font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xl font-bold">Let&apos;s Connect</h2>
          <SocialLinks className="mt-4 w-fit" />
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-white/20 pt-5 text-sm text-white/70">
        &copy; {new Date().getFullYear()} Ramadwipa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
