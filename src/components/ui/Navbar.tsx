import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navigation";

const MotionLink = motion.create(Link);

const Navbar = () => {
  // this for detect menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // this for use ini navbar
  const navRef = useRef<HTMLElement>(null);

  // effect to detect click outside menu mobile
  useEffect(() => {
    // if close mobile menu, return
    if (!isMobileMenuOpen) return;

    // this for detect click outside menu mobile
    const handleClickOutside = (event: MouseEvent) => {
      // if menu open, and click outside menu mobile, then close menu mobile
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    // listener mouse down
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      // remove listener mouse down
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    // nav: flex
    <motion.nav
      ref={navRef}
      aria-label="Primary navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-50 mx-4 mt-2 rounded-4xl border border-neutral-500/30 bg-white/70 px-6 py-3 backdrop-blur-md transition-all duration-300 md:mx-12 md:rounded-4xl"
    >
      {/* Line up (Logo + Desktop Menu + Hamburger) */}
      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Link
            to="/#home"
            className="text-md font-bold italic md:text-lg lg:text-xl"
          >
            Ramadwipa.
          </Link>
        </motion.div>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <MotionLink
                  to={link.href}
                  className="group hover:text-primary relative inline-block py-1 font-semibold transition-colors duration-300 focus-visible:ring"
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className="bg-primary absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </MotionLink>
              </li>
            ))}
          </ul>
          <MotionLink
            to="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary flex cursor-pointer items-center gap-2 rounded-4xl px-4 py-2 text-center font-medium text-white"
          >
            Let's Talk <ArrowUpRight size={20} />
          </MotionLink>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="text-text-main cursor-pointer p-2 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mt-4 flex flex-col gap-4 border-t border-neutral-500/30 pt-4 pb-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="focus:text-primary block text-lg font-semibold transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <MotionLink
              to="/#contact"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary flex w-fit cursor-pointer items-center gap-2 rounded-md py-3 text-lg font-semibold transition-colors duration-300 hover:text-blue-800"
            >
              Let's Talk <ArrowUpRight size={20} weight="bold" />
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
