import React, { useRef } from "react";
import "./Booking.css";

function Booking() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const massage = form.massage.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Pedido de Marcação - Luz Indigo");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nTipo de Massagem: ${massage}\nMensagem: ${message}`
    );

    window.location.href = `mailto:luz.indigo579@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="booking-container">
      <h1>Marque a sua terapia</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="booking-form">
        <input name="name" type="text" placeholder="Nome" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" type="tel" placeholder="Telefone" required />
        <select name="massage" required>
          <option value="">Escolha o tipo de massagem</option>
          <option value="Relaxamento">Relaxamento</option>
          <option value="Terapêutica">Terapêutica</option>
          <option value="Drenagem Linfática">Drenagem Linfática</option>
          <option value="Massagem com Pedras Quentes">Massagem com Pedras Quentes</option>
          <option value="Outra">Outra</option>
        </select>
        <textarea name="message" placeholder="Mensagem (opcional)" rows={4} />
        <button type="submit">Enviar Pedido</button>
      </form>
    </section>
  );
}

export default Booking;