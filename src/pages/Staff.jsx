import React from "react";

export default function Staff() {

  const staff = [
    {
      name: "Simon Ghislain ETSIL MONY",
      role: "Président du Conseil d’Administration (PCA) et Promoteur",
      description:
        "Fondateur et promoteur de la Léopard Royal Football Academy. Il est à l’origine du projet sportif lancé en 2012. Sous son impulsion, l’académie a obtenu son agrément officiel le 03 avril 2014 et poursuit sa mission de formation et de promotion des jeunes talents du football.",
      photo: "/logo.png",
    },
    {
      name: "Luc-Yves BOHOL BOUMTJE",
      role: "Président",
      description:
        "Ancien Secrétaire Général de l’académie et membre fondateur du projet. En qualité de Président, il assure la coordination générale des activités sportives et administratives et veille à la mise en œuvre de la vision stratégique de la Léopard Royal Football Academy.",
      photo: "/logo.png",
    },
    {
      name: "ANDRE KARENIE KOULEA",
      role: "Directeur Technique",
      description:
        "Responsable de la politique sportive et de la méthodologie de formation de l’académie. Il supervise le développement technique des joueurs, encadre les entraîneurs et veille à l’excellence de la formation sportive.",
      photo: "/logo.png",
    },
    {
      name: "Huguette MBODIONG AMANG",
      role: "Directrice Administrative, Financière et Générale (DAF / DAG)",
      description:
        "Responsable de la gestion administrative, financière et organisationnelle de l’académie. Elle assure le suivi des ressources, la gestion des partenariats et le bon fonctionnement administratif du club.",
      photo: "/logo.png",
    }
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>

      <h1 style={{ textAlign: "center" }}>Staff Technique et Administratif</h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        L’équipe dirigeante de la Léopard Royal Football Academy œuvre au développement
        et à la formation des jeunes talents du football depuis la création du club.
      </p>


      {/* HISTORIQUE DU CLUB */}

      <section style={{ marginBottom: "50px", textAlign: "center" }}>

        <h2>Histoire de l’Académie</h2>

        <p>
          La <strong>Léopard Royal Football Academy</strong> a été fondée en <strong>2012</strong>
          avec l’ambition de contribuer à la formation et à la promotion des jeunes talents
          du football camerounais.
        </p>

        <p>
          L’académie a obtenu son <strong>agrément officiel le 03 avril 2014</strong>,
          marquant ainsi une étape importante dans son développement institutionnel
          et sportif.
        </p>

      </section>


      {/* STAFF */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >

        {staff.map((member, index) => (

          <div
            key={index}
            style={{
              width: "260px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px"
              }}
            />

            <h3>{member.name}</h3>

            <h4 style={{ color: "#555" }}>{member.role}</h4>

            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {member.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}