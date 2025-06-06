import React from "react";
import "./About.css";

const About = () => (
  <section className="about-container">
    <h1>Sobre Filipa Real</h1>
    <img
      src="/images/filipa-real.jpg"
      alt="Filipa Real"
      className="about-photo"
      loading="lazy"
    />
    <p>
      Olá! Sou a Filipa Real, terapeuta dedicada ao bem-estar e desenvolvimento pessoal.
      Com anos de experiência em terapias integrativas, ajudo pessoas a encontrarem equilíbrio,
      autoconhecimento e harmonia nas suas vidas.
    </p>
    <p>
      Acredito que cada pessoa é única e merece um acompanhamento personalizado, respeitando
      sua história e seus objetivos. Meu trabalho é guiado pela empatia, escuta ativa e compromisso
      com a transformação positiva.
    </p>
    <p>
      Se deseja saber mais ou agendar uma sessão, entre em contato!
    </p>
  </section>
);

export default About;