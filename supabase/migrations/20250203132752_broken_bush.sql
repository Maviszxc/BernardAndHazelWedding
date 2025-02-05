/*
  # Add dietary restrictions column to rsvps table

  1. Changes
    - Add `dietary_restrictions` column to `rsvps` table
    - Add column safely using IF NOT EXISTS

  2. Notes
    - This migration adds support for storing dietary restrictions information
    - Uses text type to allow for detailed dietary requirements
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'rsvps' 
    AND column_name = 'dietary_restrictions'
  ) THEN
    ALTER TABLE rsvps 
    ADD COLUMN dietary_restrictions text;
  END IF;
END $$;