import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for future database tables
export interface ChatSession {
  id: string;
  created_at: string;
  locale: string;
  messages: {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  }[];
}

export interface StorySubmission {
  id: string;
  created_at: string;
  name: string;
  age: number;
  cancer_type: string;
  story: string;
  status: 'pending' | 'approved' | 'rejected';
}
