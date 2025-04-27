import React from "react";

function Services() {
  const services = [
    {
      icon: "📹",
      title: "Vidéosurveillance",
      description: "Installation de caméras de surveillance de haute qualité pour entreprises et particuliers."
    },
    {
      icon: "🔐",
      title: "Contrôle d'accès",
      description: "Systèmes électroniques de contrôle des accès pour sécuriser vos bâtiments."
    },
    {
      icon: "🚨",
      title: "Alarmes et détection",
      description: "Systèmes d'alarmes fiables pour la détection d'intrusion et d'incendie."
    }
  ];

  return (
    <section className="services">
      <h2 style={{ color: "#0051a2", fontSize: "2rem" }}>Nos Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div style={{ fontSize: "2rem" }}>{service.icon}</div>
            <h3 style={{ margin: "1rem 0 0.5rem" }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
