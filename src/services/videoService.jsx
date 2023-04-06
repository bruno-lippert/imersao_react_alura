import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://edruuzehjlinhtdgfiem.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcnV1emVoamxpbmh0ZGdmaWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NjgwMjMsImV4cCI6MTk5NjE0NDAyM30.5TeSnqJlBE6TNMyRZLbM0-iijJpGiBmm5AYfDsbi11w'
const supabase = createClient(supabaseUrl, supabaseKey)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*");
        }
    }
}