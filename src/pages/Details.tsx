import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Music, Camera, Shirt } from 'lucide-react';
import { WeddingDetails } from '../components/WeddingDetails';
import { GiftGuide } from '../components/GiftGuide';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Details() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen  bg-gradient-to-b from-white via-navy-50/30 to-white"
    >
      <WeddingDetails />

      <section className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-4xl font-cursive text-navy-900 mb-4">
            Dress Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in creating an elegant atmosphere for our special day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/src/assets/images/dresscodef.png"
              alt="Formal attire example"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-cursive mb-2">Formal Attire</h3>
              <p className="text-sm text-white/90">
                We kindly request our guests to dress in formal attire befitting
                our evening celebration
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 flex flex-col justify-center"
            {...fadeIn}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">Ladies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Floor-length or cocktail dresses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Elegant evening gowns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Sophisticated pantsuits
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Gentlemen
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Dark suits or tuxedos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Formal dress shoes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-600 rounded-full mr-3" />
                  Ties or bow ties
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Color Palette
              </h3>
              <div className="flex gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#1A2B50]"
                  title="Dark Blue"
                />
                <div
                  className="w-10 h-10 rounded-full bg-[#2B4C8C]"
                  title="Royal Blue"
                />
                <div
                  className="w-10 h-10 rounded-full bg-[#4B75B6]"
                  title="Medium Blue"
                />
                <div
                  className="w-10 h-10 rounded-full bg-[#A7C0DB]"
                  title="Light Blue"
                />
                <div
                  className="w-10 h-10 rounded-full bg-[#D5E0ED]"
                  title="Lightest Blue"
                />
              </div>
              <p className="text-gray-600">
                We encourage our guests to dress in elegant blue tones that
                complement our wedding colors
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div className="text-center mb-16" {...fadeIn}>
          <h2 className="text-4xl font-cursive text-navy-900 mb-4">
            Venue & Directions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your journey to celebrate with us
          </p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-12"
          {...fadeIn}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15444.32!2d121.0382245!3d14.6197735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3397b7af3f3dce4f%3A0x81d43f3c8c4c93cf!2sImmaculate%20Conception%20Cathedral%20of%20Cubao%2C%2040%20Lantana%20Street%2C%20Cubao%2C%20Quezon%20City%2C%20Metro%20Manila!3m2!1d14.6197735!2d121.0382245!4m5!1s0x3397b79f28357719%3A0x8c910fd0681d3c01!2sOasis%20Manila%2C%20169%20Aurora%20Boulevard%2C%20San%20Juan%2C%20Metro%20Manila!3m2!1d14.6086391!2d121.0358799!5e0!3m2!1sen!2sph!4v1708589684659!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-navy-900">
                Ceremony Venue
              </h3>
              <p className="text-gray-600">
                Immaculate Conception Cathedral of Cubao
                <br />
                40 Lantana Street, Cubao
                <br />
                Quezon City, Metro Manila
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>3:00 PM - 4:00 PM</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-navy-900">
                Reception Venue
              </h3>
              <p className="text-gray-600">
                Oasis Manila
                <br />
                169 Aurora Boulevard
                <br />
                San Juan, Metro Manila
              </p>
              <div className="flex items-center text-sm text-navy-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>5:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-24"></div>
      </section>
      <motion.div className="text-center mt-16 " {...fadeIn}>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We want you to witness our special day,
          <br />
          please stay with us until the end of our celebration.
        </p>
        <p className="text-3xl font-cursive text-navy-900 mt-8 pb-11">See you!</p>
      </motion.div>
    </motion.div>
  );
}