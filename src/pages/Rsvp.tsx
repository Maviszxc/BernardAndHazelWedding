import { motion } from 'framer-motion';
import { RsvpForm } from '../components/RsvpForm';

export function Rsvp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-24 px-4 elegant-bg bg-gradient-to-b from-white via-navy-50/30 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-['Great_Vibes'] text-navy-900 mb-6">
            Respond, if it pleases you
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We would be honored to have you join us in celebrating our special
            day.
          </p>
        </motion.div>

        <RsvpForm />
      </div>
    </motion.div>
  );
}