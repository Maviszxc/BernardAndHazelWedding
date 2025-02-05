import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { supabase } from '../lib/supabase';
import { Heart, X, Check, Gift, AlertCircle } from 'lucide-react';

export function RsvpForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    attending: null as boolean | null,
    dietary_restrictions: '',
    has_allergies: false,
    allergy_details: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([formData]);
      
      if (error) throw error;
      
      setShowSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        attending: null,
        dietary_restrictions: '',
        has_allergies: false,
        allergy_details: ''
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm"
          >
            <div className="bg-gradient-elegant rounded-2xl p-8 shadow-xl max-w-md mx-4 success-modal relative border border-white/20">
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <motion.div 
                  className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-3xl font-['Great_Vibes'] text-navy-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've received your RSVP and look forward to celebrating our special day with you.
                </p>
                <motion.div 
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-8 w-full max-w-md mx-auto glass-card p-8 rounded-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
          </motion.div>
          <h2 className="text-3xl font-['Great_Vibes'] text-navy-900">Your Response</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 transition-all bg-white/50 backdrop-blur-sm"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 transition-all bg-white/50 backdrop-blur-sm"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
            />
          </div>

    
        </div>

        <div className="space-y-4 pt-6">
          <span className="block text-sm font-medium text-gray-700 text-center mb-4">
            Will you be attending?
          </span>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={formData.attending === true ? 'primary' : 'outline'}
              onClick={() => setFormData({ ...formData, attending: true })}
              className="w-full justify-center text-center py-3 hover:scale-105 transition-transform"
            >
              Yes
            </Button>
            <Button
              type="button"
              variant={formData.attending === false ? 'primary' : 'outline'}
              onClick={() => setFormData({ ...formData, attending: false })}
              className="w-full justify-center text-center py-3 hover:scale-105 transition-transform"
            >
              No
            </Button>
          </div>
        </div>

        {formData.attending && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-6 pt-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Do you have any allergies?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={formData.has_allergies ? 'primary' : 'outline'}
                  onClick={() => setFormData({ ...formData, has_allergies: true })}
                  className="w-full justify-center text-center py-2 hover:scale-105 transition-transform"
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant={formData.has_allergies === false ? 'primary' : 'outline'}
                  onClick={() => setFormData({ ...formData, has_allergies: false, allergy_details: '' })}
                  className="w-full justify-center text-center py-2 hover:scale-105 transition-transform"
                >
                  No
                </Button>
              </div>
            </div>

            {formData.has_allergies && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label htmlFor="allergy_details" className="block text-sm font-medium text-gray-700 mb-2">
                  Please specify your allergies
                </label>
                <textarea
                  id="allergy_details"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 transition-all bg-white/50 backdrop-blur-sm"
                  value={formData.allergy_details}
                  onChange={(e) => setFormData({ ...formData, allergy_details: e.target.value })}
                />
              </motion.div>
            )}

            <div>
              <label htmlFor="dietary_restrictions" className="block text-sm font-medium text-gray-700 mb-2">
                Any other dietary restrictions?
              </label>
              <textarea
                id="dietary_restrictions"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 transition-all bg-white/50 backdrop-blur-sm"
                value={formData.dietary_restrictions}
                onChange={(e) => setFormData({ ...formData, dietary_restrictions: e.target.value })}
                placeholder="E.g., vegetarian, vegan, gluten-free, etc."
              />
            </div>
          </motion.div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full py-4 text-lg font-medium transition-all transform hover:scale-105 duration-200 mt-8 bg-gradient-to-r from-navy-600 to-navy-700"
        >
          Submit RSVP
        </Button>
      </motion.form>
    </div>
  );
}