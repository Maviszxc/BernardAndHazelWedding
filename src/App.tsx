import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Gallery } from './pages/Gallery';
import { Rsvp } from './pages/Rsvp';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Logo } from './components/Logo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  useScrollToTop();

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/details', label: 'Details' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/rsvp', label: 'RSVP' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-navy-50">
      <motion.nav
        className="fixed w-full backdrop-blur-lg z-50 border-b border-white/10 bg-white/80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 md:h-16 items-center">
            <Link to="/">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo className="w-6 h-6 md:w-8 md:h-8 text-navy-600" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-black-600 bg-navy-50"
                      : "text-gray-500 hover:text-navy-600 hover:bg-navy-50/50"
                  }`}
                >
                  <motion.span
                    className="relative z-10 inline-block text-lg"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-200/50 to-navy-100/50"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 text-navy-600 hover:text-navy-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-14 bg-navy/95 backdrop-blur-xl z-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
              {/* Background blur overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-xl z-30" />

              {/* Box around the navigation items */}
              <div className="flex flex-col items-center m-11 justify-start pt-8 h-100 w-11/11 space-y-4 z-40 relative  border-gray-200 bg-white/80 shadow-2xl rounded-3xl p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative text-lg font-medium px-6 py-2 rounded-full transition-all duration-300  ${
                      location.pathname === item.path
                        ? "text-navy-600 bg-navy-50"
                        : "text-gray-800 hover:text-black-600 hover:bg-navy-50/50"
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="block text-2xl"
                    >
                      {item.label}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute inset-0 rounded-full from-gold-200/50 to-navy-100/50 "
                        layoutId="mobile-navbar-indicator"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="pt-14 md:pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="w-20 h-20 mx-auto mb-8 text-white bg-[url('assets/images/finalbgW.png')] bg-cover bg-center" />
            <div>
              <p className="text-2xl font-['Great_Vibes'] mb-2">
                Bernard & Hazel
              </p>
              <p className="text-sm font-light">June 21, 2025</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;