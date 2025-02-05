import { Calendar, MapPin, Clock, Heart, Music, Camera, Users, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const timelineItems = [
  { time: "3PM", event: "Wedding Ceremony", icon: "🤵👰" },
  { time: "4PM", event: "After Ceremony Photoshoot", icon: "📸" },
  { time: "5PM", event: "Arrive at the Reception", icon: "🏰" },
  { time: "6PM", event: "Dinner", icon: "🍽️" },
  { time: "7PM", event: "Toast", icon: "🥂" },
  { time: "8PM", event: "Party", icon: "💃" },
  { time: "9PM", event: "Send Off", icon: "👋" }
];

const entourage = {
  parents: {
    groom: [
      "Mr. Marcelo Sebastian",
      "Mrs. Maria Fe Sebastian"
    ],
    bride: [
      "Mr. Bethwel Gundaya",
      "Mrs. Mercidita Gundaya (*)"
    ]
  },
  principalSponsors: [
    "Mayor Rey Lacoste",
    "Mrs. Mercedes Tamayor",
    "Atty. Michael Edquilag",
    "Mrs. Milagros Sabado",
    "Mr. Enrico Valerio",
    "Mrs. Tagumpay Valerio",
    "Mr. Elogio Peralta",
    "Mrs. Merlinda Peralta",
    "Mr. Eddie Padrigone",
    "Mrs. Restituta Padrigone"
  ],
  bestMan: "Mr. Mervin Howel Gundaya",
  maidOfHonor: "Ms. Riza Zabala",
  candle: [
    "Mr. Lemuel Sebastian",
    "Ms. Danielle Zea Salanga"
  ],
  cord: [
    "Mr. Reinel Francisco",
    "Ms. Maribeth Hannah Gundaya"
  ],
  veil: [
    "Lt. Col. Jeffrex Molina",
    "Mrs. Judith Molina"
  ],
  groomsmen: [
    "Mr. Jason Bobis",
    "Mr. Lowel Nabong",
    "Mr. Francis Caligagan"
  ],
  bridesmaids: [
    "Ms. Aimeh Grace Lazaro",
    "Ms. Rizza Enriquez",
    "Ms. Rosalyn Ruth Teodorico"
  ],
  coinBearer: "Caleb Arkin Lazaro",
  ringBearer: "Juancho Shuaro Teodorico",
  bibleBearer: "Liam Nabong",
  flowergirls: [
    "Janella Nadine Baracinas",
    "Ava Eleanor Lazaro"
  ]
};

export function WeddingDetails() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-cursive text-navy-900 mb-4">
          Bernard & Hazel
        </h1>
        <p className="text-xl text-gray-600">Together with their families</p>
        <p className="text-xl text-gray-600 mt-4">
          Request the pleasure of your company
        </p>
      </motion.div>

      <section id="ceremony" className="mb-24">
        <motion.h2
          className="text-3xl font-cursive text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          Ceremony
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Date</h3>
            <p className="text-gray-600">June 21, 2025</p>
            <p className="text-gray-600">3:00 PM - 4:00 PM</p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Venue</h3>
            <p className="text-gray-600">The Immaculate Conception</p>
            <p className="text-gray-600">Cathedral of Cubao</p>
            <p className="text-gray-600 text-sm mt-2">40 Lantana St., Cubao</p>
            <p className="text-gray-600 text-sm">Quezon City</p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white shadow-lg rounded-2xl transform hover:scale-105 transition-transform"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <Camera className="w-10 h-10 text-navy-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-2">Details</h3>
            <p className="text-gray-600">Unplugged Ceremony</p>
            <p className="text-gray-600 text-sm mt-2">
              Please keep the ceremony camera-free
            </p>
            <p className="text-gray-600 text-sm">
              Professional photos will be provided
            </p>
          </motion.div>
        </div>
      </section>

      <section id="timeline" className="mb-24">
        <motion.h2
          className="text-3xl font-cursive text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          Wedding Timeline
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.time}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 text-right font-medium text-navy-900">
                  {item.time}
                </div>
                <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="entourage" className="mb-24">
        <motion.h2
          className="text-3xl font-cursive text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          The Entourage
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div className="space-y-8" {...fadeIn}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Parents of the Groom
              </h3>
              {entourage.parents.groom.map((parent, index) => (
                <p key={index} className="text-gray-600">
                  {parent}
                </p>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Principal Sponsors
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {entourage.principalSponsors.map((sponsor, index) => (
                  <p key={index} className="text-gray-600">
                    {sponsor}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Best Man & Groomsmen
              </h3>
              <p className="text-gray-600 font-medium">{entourage.bestMan}</p>
              <div className="mt-4">
                {entourage.groomsmen.map((groomsman, index) => (
                  <p key={index} className="text-gray-600">
                    {groomsman}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Parents of the Bride
              </h3>
              {entourage.parents.bride.map((parent, index) => (
                <p key={index} className="text-gray-600">
                  {parent}
                </p>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Maid of Honor & Bridesmaids
              </h3>
              <p className="text-gray-600 font-medium">
                {entourage.maidOfHonor}
              </p>
              <div className="mt-4">
                {entourage.bridesmaids.map((bridesmaid, index) => (
                  <p key={index} className="text-gray-600">
                    {bridesmaid}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Cord & Veil
              </h3>

              <div className="mt-4">
                {entourage.cord.map((cord, index) => (
                  <p key={index} className="text-gray-600">
                    {cord}
                  </p>
                ))}
              </div>

              <div className="mt-4">
                {entourage.veil.map((veil, index) => (
                  <p key={index} className="text-gray-600">
                    {veil}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-navy-900 mb-4">
                Little Ones
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    Ring Bearer
                  </p>
                  <p className="text-gray-600">{entourage.ringBearer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    Bible Bearer
                  </p>
                  <p className="text-gray-600">{entourage.bibleBearer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    Coin Bearer
                  </p>
                  <p className="text-gray-600">{entourage.coinBearer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">
                    Flower Girls
                  </p>
                  {entourage.flowergirls.map((girl, index) => (
                    <p key={index} className="text-gray-600">
                      {girl}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gift-guide" className="mb-24">
        <motion.h2
          className="text-3xl font-cursive text-center text-navy-900 mb-12"
          {...fadeIn}
        >
          Gift Guide
        </motion.h2>
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-auto"
          {...fadeIn}
        >
          <Gift className="w-10 h-10 text-navy-600 mx-auto mb-6" />
          <p className="text-gray-600 italic mb-6">
            "With all that we have, we are truly blessed.
            <br />
            Your presence and prayers are that we request.
            <br />
            But knowing you and your desire to give,
            <br />
            Monetary gift is the one we suggest."
          </p>
          <div className="mt-8 text-sm text-gray-500">
            <p>For inquiries, you may contact:</p>
            <p className="mt-2">Bernard Sebastian: 09615818481</p>
            <p>Hazel Gundaya: 09287463494</p>
          </div>
        </motion.div>
      </section>
     
    </motion.div>
  );
}