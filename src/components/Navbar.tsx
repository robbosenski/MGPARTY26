import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg border-b border-white/10' : ''
      }`}
      style={{ backgroundColor: '#ff00f2', top: '48px' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="group cursor-pointer"
          >
            <img
              src="/logos/MG26_Logo_White.png"
              alt="MG26 Mardi Gras logo"
              className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-pink-300 transition-colors duration-300 uppercase tracking-[0.03em]"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className="bg-white text-[#d900ed] hover:bg-white/90 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 border border-transparent uppercase tracking-[0.03em]"
            >
              SIGN UP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden pt-6 pb-4 space-y-4"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-white hover:text-pink-300 transition-colors duration-300 py-2 uppercase tracking-[0.03em]"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('signup')}
                className="w-full bg-white text-[#d900ed] hover:bg-white/90 px-6 py-3 rounded-full transition-all duration-300 border border-transparent uppercase tracking-[0.03em]"
              >
                SIGN UP
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
