import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcGlzbG9qcXd0cmJ4amZ1YnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODUwODEsImV4cCI6MjA4NzQ2MTA4MX0.Sh8dPwKmTVkTkDRaYmMDGATwwE7_lt6vWAKqRyuVJGY";

export const supabaseUrl = "https://fspislojqwtrbxjfubyk.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
