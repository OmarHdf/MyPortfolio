import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Omar El Hedfi</span>  
            de <span className="purple">Kairouan, Tunisie</span>.
            <br />
            Actuellement diplômé en Technologies de l'Information de l'ISET Kairouan,  
            je suis passionné par le développement logiciel, l'administration système et les pratiques DevOps.
            <br />
            Je travaille sur des projets intégrant l'intégration continue, le déploiement continu et la sécurité (DevSecOps).
            <br />
            <br />
            En dehors du codage, voici quelques activités que j'aime faire :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participer à des projets open source
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire sur l’intelligence artificielle et le DevOps
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des scripts d'automatisation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construis des solutions qui ont un impact concret et durable !"{" "}
          </p>
          <footer className="blockquote-footer">Omar El Hedfi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

