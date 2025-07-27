import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqhnnutmjsvkhafsihje.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaG5udXRtanN2a2hhZnNpaGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NzY2NTgsImV4cCI6MjA2OTE1MjY1OH0.LL9R9SQZPjffWjuBVJMHjkEcvCxhPpgvk2Y3j4-E3vA'; // full key here

export const supabase = createClient(supabaseUrl, supabaseKey);
