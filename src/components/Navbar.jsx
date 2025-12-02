import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { MagneticButton } from "./animations/InteractiveElements";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#about", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" }
];

const MobileMenu = ({ isOpen, onClose, theme, handleTheme }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/20 dark:border-gray-700/30 z-50 lg:hidden shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <MagneticButton>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <CgClose className="text-2xl" />
                  </Button>
                </MagneticButton>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <MagneticButton>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
                      >
                        {link.label}
                      </a>
                    </MagneticButton>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <MagneticButton>
                  <Button
                    variant="outline"
                    onClick={handleTheme}
                    className="w-full justify-start gap-3 py-3 text-lg font-medium border-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {theme === "dark" ? (
                      <HiMoon className="text-xl text-white" />
                    ) : (
                      <HiSun className="text-xl text-gray-900" />
                    )}
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.section 
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/30 shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="p-5 mx-20 font-['Poppins'] max-sm:p-4 max-sm:mx-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#about"
                className="text-3xl max-sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                {<img src="/assets/logo/sajal_logo.png" alt="Logo" className="h-16 w-auto" />
}
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <MagneticButton>
                      <a
                        href={link.href}
                        className="relative text-lg font-medium text-[#00040f] dark:text-[#e1e1e1] hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        {link.label}
                        <motion.div
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"
                          whileHover={{ width: "100%" }}
                        />
                      </a>
                    </MagneticButton>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <MagneticButton>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleTheme}
                    className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-900 dark:text-white"
                  >
                    <motion.div
                      animate={{ rotate: theme === "dark" ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {theme === "dark" ? (
                        <HiMoon className="text-2xl" />
                      ) : (
                        <HiSun className="text-2xl" />
                      )}
                    </motion.div>
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <MagneticButton>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setNav(true)}
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <CgMenuRightAlt className="text-2xl" />
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={nav} 
        onClose={() => setNav(false)} 
        theme={theme}
        handleTheme={handleTheme}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;