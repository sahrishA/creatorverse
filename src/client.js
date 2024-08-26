import { createClient } from '@supabase/supabase-js';
const URL = 'https://omqrqnqjmllbbrpzsarq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcXJxbnFqbWxsYmJycHpzYXJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDYxNDM1NiwiZXhwIjoyMDQwMTkwMzU2fQ._A3CeqOqeVFWBwzE_I116RJ4wjxzbYeqyUCqZChQZ6A';
//const supabase = createClient(URL, API_KEY);
export const supabase = createClient(URL, API_KEY);
