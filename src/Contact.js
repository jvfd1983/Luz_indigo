import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado pelo contato.");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="main-container">
      <h2>Contato</h2>
      <Link to="/" className="back-link">← Voltar à página principal</Link>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;