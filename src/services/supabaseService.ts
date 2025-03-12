import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// Note: In a real app, these values would be stored in environment variables
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

// Authentication functions
export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Database functions
export const fetchTrainingPlans = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('training_plans')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching training plans:', error);
    return [];
  }
};

export const fetchDrills = async (category?: string) => {
  try {
    let query = supabase.from('drills').select('*');
    
    if (category) {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching drills:', error);
    return [];
  }
};

export const saveTrainingSession = async (sessionData: any) => {
  try {
    const { data, error } = await supabase
      .from('training_sessions')
      .insert([sessionData]);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error saving training session:', error);
    throw error;
  }
};

export const fetchUserProgress = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false })
      .limit(10);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    return [];
  }
};

export const fetchCommunityEvents = async () => {
  try {
    const { data, error } = await supabase
      .from('community_events')
      .select('*')
      .order('date', { ascending: true });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching community events:', error);
    return [];
  }
};

export const fetchForumTopics = async () => {
  try {
    const { data, error } = await supabase
      .from('forum_topics')
      .select('*')
      .order('last_activity', { ascending: false });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching forum topics:', error);
    return [];
  }
};

export const fetchResourceLibrary = async (category?: string) => {
  try {
    let query = supabase.from('resources').select('*');
    
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
};

export default supabase; 