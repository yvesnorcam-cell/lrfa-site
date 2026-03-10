import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://godiuolnsamylnejwefz.supabase.co"

const supabaseKey = "sb_publishable_WOcbdtb_5U_G8z-uaP0AOg_GOBpNNPO"

export const supabase = createClient(supabaseUrl, supabaseKey)