import React from "react";

function Contact() {
  return (
    <section className="contact-simple">
      <h1>Contato</h1>
      <p>
        <strong>Telefone:</strong>{" "}
        <a href="tel:+351927559279" className="contact-link">+351 927 559 279</a>
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:luz.indigo579@gmail.com" className="contact-link">luz.indigo579@gmail.com</a>
      </p>
      <p>
        <strong>Instagram:</strong>{" "}
        <a
          href="https://www.instagram.com/seu_instagram_aqui"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          @seu_instagram_aqui
        </a>
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/351927559279"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp-link"
        >
          Enviar mensagem
        </a>
      </p>
    </section>
  );
}

export default Contact;