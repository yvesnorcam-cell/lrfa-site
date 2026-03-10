import React from "react";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Participation à la Easter Cup",
      date: "Mars 2026",
      content:
        "Les joueurs de Léopard Royal Football Academy participeront à la 11ème édition du tournoi Easter Cup. Cette compétition internationale permettra à nos jeunes talents de se mesurer à d'autres académies et de démontrer leur progression.",
    },
    {
      id: 2,
      title: "Session de détection ouverte",
      date: "Toute l'année",
      content:
        "Léopard Royal Football Academy organise des séances de détection ouvertes aux jeunes talents souhaitant intégrer l'académie. Les détections se déroulent à Bertoua.",
    },
    {
      id: 3,
      title: "Match amical de préparation",
      date: "Avril 2026",
      content:
        "Dans le cadre de la préparation de ses équipes, l'académie organise plusieurs matchs amicaux afin d'améliorer la cohésion et les performances des joueurs.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Actualités de l'Académie</h1>

      {news.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>{item.title}</h2>
          <p><strong>{item.date}</strong></p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}