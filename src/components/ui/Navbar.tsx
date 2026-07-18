import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "../../data/navigation";

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

    // listener mouse down
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // remove listener mouse down
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    // nav: flex
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mx-4 md:mx-12 mt-2 px-6 py-3 rounded-4xl md:rounded-4xl bg-white/70 backdrop-blur-md border border-neutral-500/30  transition-all duration-300"
    >
      {/* Line up (Logo + Desktop Menu + Hamburger) */}
      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <a href="#home" className="italic font-bold text-xl">
            Ramadwipa.
          </a>
        </motion.div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="focus-visible:ring relative inline-block py-1 font-semibold transition-colors duration-300 hover:text-primary"
                >
                  {link.label}

                  <motion.span
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-primary"
                  />
                </motion.a>
              </li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-3 text-center md:py-1.5 bg-primary rounded-4xl text-white font-medium flex items-center gap-2 cursor-pointer"
          >
            Let's Talk <ArrowUpRight size={20} />
          </motion.a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          id="mobile-menu"
          aria-label="Toggle mobile menu"
          aria-labelledby="mobile-menu-open mobile-menu-close"
          className="md:hidden p-2 text-text-main cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <ul className="mt-4 pt-4 border-t border-neutral-500/30 flex flex-col gap-4 pb-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block font-semibold text-lg focus:text-primary transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen((previous) => !previous)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="py-3 rounded-md w-fit text-primary text-lg font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-800 transition-colors duration-300"
            >
              Let's Talk <ArrowUpRight size={20} weight="bold" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
