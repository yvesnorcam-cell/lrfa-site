import React from "react";

export default function Staff() {
  const staff = [
    {
      id: 1,
      name: "Président",
      role: "Président de Léopard Royal Football Academy",
      description: "Responsable de la gestion générale et de la vision stratégique de l'académie.",
    },
    {
      id: 2,
      name: "Directeur Technique",
      role: "Responsable technique",
      description: "Supervise la formation des joueurs et la méthodologie d'entraînement.",
    },
    {
      id: 3,
      name: "Entraîneur Principal",
      role: "Coach principal",
      description: "Encadre les séances d'entraînement et prépare les équipes aux compétitions.",
    },
    {
      id: 4,
      name: "Préparateur Physique",
      role: "Condition physique",
      description: "Travaille sur l'endurance, la vitesse et la préparation physique des joueurs.",
    },
    {
      id: 5,
      name: "Responsable Administratif",
      role: "Administration",
      description: "Gère les dossiers administratifs et les relations avec les partenaires.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Staff Technique et Administratif</h1>

      {staff.map((member) => (
        <div
          key={member.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>{member.name}</h2>
          <p><strong>{member.role}</strong></p>
          <p>{member.description}</p>
        </div>
      ))}
    </div>
  );
}