import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Heart, Clock, Music, Gift } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function Home() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("June 21, 2025 15:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/19/05/couple-1850073_1280.jpg"
            alt="Wedding venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-navy-900/80" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-24 h-24 mx-auto mb-8 text-white bg-[url('assets/images/finalbgW.png')] bg-cover bg-center" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-cursive mb-6">
                Bernard & Hazel
              </h1>
              <p className="text-xl md:text-2xl mb-12 font-light">
                June 21, 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="/rsvp"
                className="inline-block bg-white text-navy-900 px-8 py-3 rounded-full font-medium hover:bg-navy-50 transition-colors transform hover:scale-105 duration-200"
              >
                RSVP Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full relative">
            <div className="w-1 h-2 bg-white rounded-full absolute left-1/2 top-2 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>

      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-5" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-cursive text-navy-900 mb-6"
              {...fadeInUp}
            >
              Counting Down to Forever
            </motion.h2>
            <p className="text-lg text-gray-600">
              Join us as we celebrate our love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {Object.entries(countdown).map(([unit, value], index) => (
              <motion.div
                key={unit}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl  text-navy-600 mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-24 bg-navy-50/30" {...fadeInUp}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt="Couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </motion.div>

            <div className="space-y-6">
              <motion.h2
                className="text-4xl font-cursive text-navy-900"
                {...fadeInUp}
              >
                Our Love Story
              </motion.h2>
              <motion.p className="text-gray-600 leading-relaxed" {...fadeInUp}>
                Every love story is beautiful, but ours is my favorite. What
                started as a chance meeting blossomed into a deep connection
                that we couldn't ignore. Through countless adventures, shared
                dreams, and growing together, we found our forever in each
                other.
              </motion.p>
              <motion.div {...fadeInUp}>
                <Link
                  to="/gallery"
                  className="inline-block bg-navy-600 text-white px-8 py-3 rounded-full hover:bg-navy-700 transition-colors"
                >
                  View Our Journey
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
