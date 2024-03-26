import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wqzfeteiyivwfjzxpncu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemZldGVpeWl2d2ZqenhwbmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NTA1ODEsImV4cCI6MjAxNzQyNjU4MX0.eA4gGijZFxcrhG5sdFkhkgc0YGfAO7bbkAdmqU7PnTY"
const supabase = createClient(supabaseUrl, supabaseKey)


async function GetRangeNotes () {
  let { data: a, error } = await supabase
  .from('eleve')
  .select('*')
  return a
  
}

async function GetIdNotes(id ){
    let { data: a, error } = await supabase
  .from('eleve')
  .select("*")
  // Filters
  .eq('id', id)

  return { data: a, error }
}

async function AddNotes(info){

  const { data, error } = await supabase
  .from('eleve')
  .insert(info)
  .select("id")
  console.log(data)
  return { data, error }
}

async function response(info){

  const { data, error } = await supabase
  .from('reponse')
  .insert(info)
  .select()
  return { data, error }
}


async function triche(info){
  const { data, error } = await supabase
  .from('triche')
  .insert(info)
  .select()
  return { data, error }
}

export{GetRangeNotes, GetIdNotes , AddNotes, response, triche}