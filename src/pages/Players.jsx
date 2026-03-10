import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Link } from "react-router-dom"

export default function Players() {

  const [players, setPlayers] = useState([])

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

  return (

    <div style={{padding:"40px"}}>

      <h1>Joueurs de l'académie</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"25px",
        marginTop:"40px"
      }}>

        {players.map((player) => (

          <div key={player.id} style={{
            border:"1px solid #ddd",
            borderRadius:"12px",
            padding:"20px",
            textAlign:"center",
            background:"#fff",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}>

            <div style={{
              width:"120px",
              height:"120px",
              borderRadius:"50%",
              background:"#eee",
              margin:"auto",
              marginBottom:"15px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:"40px"
            }}>
              ⚽
            </div>

            <h3>{player.name}</h3>

            <p>{player.position}</p>

            <p><strong>{player.category}</strong></p>

            <Link to={`/players/${player.id}`}>
              <button style={{
                marginTop:"10px",
                padding:"8px 15px",
                border:"none",
                background:"#111",
                color:"#fff",
                borderRadius:"6px",
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