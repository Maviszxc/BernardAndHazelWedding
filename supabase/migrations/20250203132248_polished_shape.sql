/*
  # Add allergy fields to RSVPS table
  
  1. Changes
    - Add has_allergies column (boolean)
    - Add allergy_details column (text)
    
  2. Security
    - Maintain existing RLS policies
*/

ALTER TABLE rsvps 
ADD COLUMN IF NOT EXISTS has_allergies boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS allergy_details text;