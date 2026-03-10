import React, { useState } from "react";

export default function Recruitment() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    position: "",
    city: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre demande de détection a été envoyée !");
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recrutement & Détection</h1>

      <p>
        Léopard Royal Football Academy organise des séances de détection
        ouvertes toute l'année pour les jeunes talents souhaitant intégrer
        l'académie basée à Bertoua.
      </p>

      <h2>Formulaire de candidature</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>

        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="position"
          placeholder="Poste (Attaquant, Défenseur...)"
          value={formData.position}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="Ville"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Envoyer la demande
        </button>

      </form>
    </div>
  );
}