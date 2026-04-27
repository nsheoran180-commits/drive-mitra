// अपनी Supabase Project URL और anon key यहाँ पेस्ट करें
const SUPABASE_URL = 'https://nidtahuzhrfdrasxzriz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-B0SAcoPawUPF_2WHo23dw_Xn3a7U32';

// Supabase क्लाइंट इनिशियलाइज़ करें
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
