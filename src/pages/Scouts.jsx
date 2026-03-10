import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Link } from "react-router-dom"

export default function Scouts() {

  const [players, setPlayers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    loadPlayers()
  }, [])

  async function loadPlayers() {

    const { data } = await supabase
      .from("players")
      .select("*")

    if (data) {
      setPlayers(data)
    }

  }

  const filteredPlayers = players.filter(player => {

    const text = search.toLowerCase()

    return (
      player.name?.toLowerCase().includes(text) ||
      player.position?.toLowerCase().includes(text) ||
      player.category?.toLowerCase().includes(text)
    )

  })

  return (

    <div style={{padding:"40px"}}>

      <h1>Zone Recruteurs / Scouts</h1>

      <p>
        Recherchez facilement les talents de Léopard Royal Football Academy.
      </p>

      <input
        type="text"
        placeholder="Rechercher un joueur, un poste ou une catégorie..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:"10px",
          width:"100%",
          maxWidth:"400px",
          marginTop:"20px",
          marginBottom:"30px",
          borderRadius:"6px",
          border:"1px solid #ccc"
        }}
      />

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        {filteredPlayers.map(player => (

          <div key={player.id} style={{
            border:"1px solid #ddd",
            padding:"20px",
            borderRadius:"10px",
            background:"#fff",
            boxShadow:"0 3px 8px rgba(0,0,0,0.1)"
          }}>

            <h3>{player.name}</h3>

            <p><strong>Poste :</strong> {player.position}</p>

            <p><strong>Catégorie :</strong> {player.category}</p>

            <Link to={`/players/${player.id}`}>
              <button style={{
                marginTop:"10px",
                padding:"8px 15px",
                background:"#111",
                color:"#fff",
                border:"none",
                borderRadius:"5px",
                cursor:"pointer"
              }}>
                Voir profil
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>

  )
}