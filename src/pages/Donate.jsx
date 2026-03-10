export default function Donate() {

  function donate() {

    window.open(
      "https://www.paypal.com/donate",
      "_blank"
    )

  }

  return (

    <div style={{padding:"40px", maxWidth:"700px", margin:"auto"}}>

      <h1>Soutenir Léopard Royal Football Academy</h1>

      <p>
        Les dons permettent de soutenir la formation des jeunes joueurs,
        l'achat d'équipements et l'organisation des compétitions.
      </p>

      <p>
        Les recruteurs et supporters peuvent faire un don pour soutenir
        l'académie et accéder aux profils complets des joueurs.
      </p>

      <button
        onClick={donate}
        style={{
          marginTop:"20px",
          padding:"12px 20px",
          background:"#111",
          color:"#fff",
          border:"none",
          borderRadius:"6px",
          cursor:"pointer"
        }}
      >
        Faire un don
      </button>

    </div>

  )
}