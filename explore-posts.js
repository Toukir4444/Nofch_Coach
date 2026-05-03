// explore-posts.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'your-supabase-url';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch posts
async function fetchPosts() {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
    return data;
}

// Function to create a new post
async function createPost(content) {
    const { data, error } = await supabase.from('posts').insert([{ content }]);
    if (error) {
        console.error('Error creating post:', error);
        return null;
    }
    return data;
}

export { fetchPosts, createPost };