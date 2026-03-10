import React from "react"

export default function Home() {
  return (
    <div>

      {/* BANNIERE */}
      <section style={{
        background:"#0a3d62",
        color:"white",
        padding:"60px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"40px"}}>Léopard Royal Football Academy</h1>
        <p style={{fontSize:"20px"}}>Former les talents de demain</p>
        <p>Bertoua - Cameroun</p>
      </section>


      {/* PRESENTATION */}
      <section style={{padding:"40px"}}>
        <h2>Présentation de l'Académie</h2>

        <p>
          Léopard Royal Football Academy (LRFA) est une académie de football
          dédiée à la formation et à la promotion des jeunes talents du Cameroun.
          Notre mission est de développer les compétences techniques,
          physiques et mentales des joueurs afin de leur permettre d'accéder
          au football professionnel.
        </p>

        <p>
          L'académie participe régulièrement aux compétitions régionales,
          nationales et aux tournois internationaux de détection de talents.
        </p>
      </section>


      {/* OBJECTIFS */}
      <section style={{background:"#f4f4f4", padding:"40px"}}>
        <h2>Nos Objectifs</h2>

        <ul>
          <li>Former les jeunes talents du football</li>
          <li>Promouvoir le football dans la région de l'Est Cameroun</li>
          <li>Préparer les joueurs aux compétitions nationales</li>
          <li>Faciliter l'accès aux clubs professionnels</li>
        </ul>
      </section>


      {/* CATEGORIES */}
      <section style={{padding:"40px"}}>
        <h2>Nos Catégories</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:"20px"
        }}>

          <div style={{border:"1px solid #ddd", padding:"20px"}}>
            <h3>U10</h3>
            <p>Initiation au football</p>
          </div>

          <div style={{border:"1px solid #ddd", padding:"20px"}}>
            <h3>U13</h3>
            <p>Formation de base</p>
          </div>

          <div style={{border:"1px solid #ddd", padding:"20px"}}>
            <h3>U15</h3>
            <p>Perfectionnement technique</p>
          </div>

          <div style={{border:"1px solid #ddd", padding:"20px"}}>
            <h3>U17</h3>
            <p>Préparation compétition</p>
          </div>

          <div style={{border:"1px solid #ddd", padding:"20px"}}>
            <h3>Senior</h3>
            <p>Equipe compétitive</p>
          </div>

        </div>
      </section>


      {/* RECRUTEMENT */}
      <section style={{
        background:"#0a3d62",
        color:"white",
        padding:"40px",
        textAlign:"center"
      }}>
        <h2>Détection de Talents</h2>

        <p>
          Les séances de détection sont ouvertes toute l'année
          pour les jeunes joueurs souhaitant intégrer l'académie.
        </p>

        <p>
          Rejoignez Léopard Royal Football Academy et développez
          votre carrière footballistique.
        </p>

      </section>


      {/* PARTENAIRES */}
      <section style={{padding:"40px"}}>
        <h2>Partenaires</h2>

        <p>
          Léopard Royal Football Academy collabore avec plusieurs
          partenaires sportifs, éducatifs et institutionnels afin
          de promouvoir le développement du football des jeunes.
        </p>
      </section>


      {/* FOOTER */}
      <footer style={{
        background:"#111",
        color:"white",
        padding:"20px",
        textAlign:"center"
      }}>
        <p>© 2026 Léopard Royal Football Academy</p>
        <p>Bertoua - Cameroun</p>
      </footer>

    </div>
  )
}