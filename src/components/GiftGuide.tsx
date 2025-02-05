import { motion } from 'framer-motion';
import { Gift, CreditCard, Mail } from 'lucide-react';

const giftOptions = [
  {
    icon: CreditCard,
    title: 'Monetary Gifts',
    description: 'Your monetary gift will help us build our future together.',
    details: [
      'Bank transfer details will be provided upon request',
      'Cash gifts are welcome at the reception'
    ]
  },
  {
    icon: Gift,
    title: 'Traditional Gifts',
    description: 'If you prefer to give a traditional gift, we are registered at:',
    registries: [
      'Amazon',
      'Crate & Barrel',
      'Pottery Barn'
    ]
  },
  {
    icon: Mail,
    title: 'Your Presence',
    description: 'Your presence at our wedding is the greatest gift of all.',
    note: 'We are grateful for your love and support on our special day.'
  }
];

export function GiftGuide() {
  return (
    <div className="py-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-['Great_Vibes'] text-center text-navy-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Gift Guide
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {giftOptions.map((option, index) => (
          <motion.div
            key={option.title}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <option.icon className="w-10 h-10 text-navy-600 mb-4" />
            <h3 className="text-xl font-medium text-navy-900 mb-3">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            
            {option.details && (
              <ul className="space-y-2 text-gray-600">
                {option.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy-600 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            
            {option.registries && (
              <ul className="space-y-2 text-gray-600">
                {option.registries.map((registry, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy-600 rounded-full mr-2" />
                    {registry}
                  </li>
                ))}
              </ul>
            )}
            
            {option.note && (
              <p className="text-gray-600 italic mt-4">{option.note}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}