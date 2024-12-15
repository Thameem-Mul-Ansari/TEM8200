import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sykwqjbwdcabpvcbxrmg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5a3dxamJ3ZGNhYnB2Y2J4cm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMzUxNDUsImV4cCI6MjA0OTgxMTE0NX0.Ir9UX9NuPn6y3eJRFNDfhyXNK-xfEzSItLaN-6BlabY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);