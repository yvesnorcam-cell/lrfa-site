import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../supabaseClient"

export default function PlayerProfile() {

  const { id } = useParams()

  const [player, setPlayer] = useState(null)

  useEffect(() => {
    fetchPlayer()
  }, [])

  async function fetchPlayer() {

    const { data, error } = await supabase
      .from("players")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.log(error)
      return
    }

    setPlayer(data)

  }

  if (!player) {
    return <p>Chargement...</p>
  }

  return (

    <div style={{
      padding:"40px",
      maxWidth:"1000px",
      margin:"auto"
    }}>

      <div style={{
        display:"flex",
        gap:"40px",
        flexWrap:"wrap"
      }}>

        {/* PHOTO */}

        <div>

          {player.avatar ? (

            <img
              src={player.avatar}
              alt={player.name}
              style={{
                width:"250px",
                borderRadius:"10px"
              }}
            />

          ) : (

            <div style={{
              width:"250px",
              height:"250px",
              background:"#eee",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              borderRadius:"10px"
            }}>
              Photo joueur
            </div>

          )}

        </div>


        {/* INFOS JOUEUR */}

        <div>

          <h1>{player.name}</h1>

          <p><strong>Age :</strong> {player.age} ans</p>

          <p><strong>Poste :</strong> {player.position}</p>

          <p><strong>Catégorie :</strong> {player.category}</p>

          <p><strong>Taille :</strong> {player.height ? player.height + " cm" : "Non renseigné"}</p>

          <p><strong>Poids :</strong> {player.weight ? player.weight + " kg" : "Non renseigné"}</p>

          <p><strong>Pied fort :</strong> {player.strong_foot || "Non renseigné"}</p>

        </div>

      </div>


      {/* BIOGRAPHIE */}

      {player.bio && (

        <div style={{marginTop:"40px"}}>

          <h2>Biographie</h2>

          <p>{player.bio}</p>

        </div>

      )}


      {/* VIDEO */}

      {player.video && (

        <div style={{marginTop:"40px"}}>

          <h2>Vidéo Highlight</h2>

          <iframe
            width="100%"
            height="450"
            src={player.video}
            title="Player video"
            frameBorder="0"
            allowFullScreen
          ></iframe>

        </div>

      )}

    </div>

  )

}