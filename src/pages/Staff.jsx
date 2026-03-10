import React from "react";

export default function Staff() {
  const staff = [
    {
      name: "Simon Ghislain ETSIL MONY",
      role: "Président du Conseil d’Administration (PCA) et Promoteur",
      description:
        "Fondateur et promoteur de la Léopard Royal Football Academy. Il est à l’origine du projet sportif lancé en 2012 avec pour ambition de contribuer à la formation, à l’encadrement et à la promotion des jeunes talents du football. Sous son impulsion, l’académie a obtenu son agrément officiel le 03 avril 2014 et poursuit son développement institutionnel et sportif.",
      photo: "/logo.png",
    },
    {
      name: "Luc-Yves BOHOL BOUMTJE",
      role: "Président",
      description:
        "Ancien Secrétaire Général de l’académie et acteur de sa mise en place dès les premières années. Devenu Président, il assure aujourd’hui la coordination générale des activités sportives et administratives, la représentation institutionnelle du club ainsi que le suivi de la vision stratégique de la Léopard Royal Football Academy.",
      photo: "/logo.png",
    },
    {
      name: "Olivier ZANG BIWELLE",
      role: "Directeur Technique",
      description:
        "Responsable de l’orientation technique de l’académie, il veille à la cohérence de la formation des joueurs et au suivi méthodologique de l’encadrement sportif. Il est également chargé des prises de vues et de la couverture en images et photographies de l’académie en toute circonstance, contribuant ainsi à la valorisation de ses activités et de son image.",
      photo: "/logo.png",
    },
    {
      name: "ANDRE KARENIE KOULEA",
      role: "Coach principal",
      description:
        "Entraîneur principal de la Léopard Royal Football Academy, il encadre les séances d’entraînement, prépare les joueurs aux compétitions et assure le suivi technique de terrain. Il intervient également, à titre accessoire, dans la préparation physique des joueurs afin d’accompagner leur développement athlétique.",
      photo: "/logo.png",
    },
    {
      name: "Huguette MBODIONG AMANG",
      role: "Directrice Administrative, Financière et Générale (DAF / DAG)",
      description:
        "Membre des premières personnes engagées dans la construction de l’académie, elle assure la gestion administrative, financière et générale du club. Elle veille au bon fonctionnement organisationnel de la structure, au suivi des ressources ainsi qu’à l’accompagnement administratif des activités de la Léopard Royal Football Academy.",
      photo: "/logo.png",
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Staff Technique et Administratif</h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        L’équipe dirigeante de la Léopard Royal Football Academy œuvre au
        développement et à la formation des jeunes talents du football depuis
        la création du club.
      </p>

      <section style={{ marginBottom: "50px", textAlign: "center" }}>
        <h2>Histoire de l’Académie</h2>

        <p>
          La <strong>Léopard Royal Football Academy</strong> a été fondée en{" "}
          <strong>2012</strong> avec pour ambition de contribuer à la formation
          et à la promotion des jeunes talents du football camerounais.
        </p>

        <p>
          L’académie a obtenu son <strong>agrément officiel le 03 avril 2014</strong>,
          marquant une étape importante dans son développement institutionnel et
          sportif.
        </p>
      </section>

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
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
                marginBottom: "15px",
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