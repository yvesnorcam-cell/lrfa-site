import React from "react";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={{textAlign: "center"}}>
        <img 
          src="/hero.jpg" 
          alt="Léopard Royal Football Academy" 
          style={{width: "100%", maxHeight: "500px", objectFit: "cover"}}
        />
        <h1>Léopard Royal Football Academy</h1>
        <p>Former les talents de demain à Bertoua</p>
      </section>

      {/* ABOUT SECTION */}
      <section style={{padding: "40px", textAlign: "center"}}>
        <h2>À propos de l'académie</h2>
        <p>
          La Léopard Royal Football Academy est un centre de formation dédié
          au développement des jeunes talents du football. Nous offrons un
          encadrement professionnel, une formation technique de qualité et
          un accompagnement vers le haut niveau.
        </p>
      </section>

      {/* GALLERY */}
      <section style={{padding: "40px", textAlign: "center"}}>
        <h2>Galerie</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>

          <img
            src="/gal1.jpg"
            alt="Entrainement"
            style={{width: "300px", borderRadius: "10px"}}
          />

          <img
            src="/gal2.jpg"
            alt="Match"
            style={{width: "300px", borderRadius: "10px"}}
          />

          <img
            src="/gal3.jpg"
            alt="Joueurs"
            style={{width: "300px", borderRadius: "10px"}}
          />

        </div>
      </section>

    </div>
  );
}