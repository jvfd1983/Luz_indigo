import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Contact from "./Contact";
import "./App.css";
import About from "./About";
import Booking from "./Booking";

const images = [
  process.env.PUBLIC_URL + "/images/massagem1.png",
  process.env.PUBLIC_URL + "/images/massagem2.png",
  process.env.PUBLIC_URL + "/images/massagem3.png",
];

function BurgerMenu({ open, onClose, isHome }) {
  return (
    <div className={`burger-menu${open ? " open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav className="burger-nav">
        {!isHome && <Link to="/" onClick={onClose}>Início</Link>}
        <Link to="/about" onClick={onClose}>Sobre</Link>
        <Link to="/contato" onClick={onClose}>Contato</Link>
        <Link to="/marcacao" onClick={onClose}>Marcação</Link>
      </nav>
    </div>
  );
}

function BurgerButton({ onClick }) {
  return (
    <button 
      className="burger-btn" 
      onClick={onClick} 
      aria-label="Abrir menu"
    >
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </button>
  );
}

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <BurgerButton onClick={onMenuClick} />
      <h1 className="title">Luz Indigo</h1>
      <p className="subtitle">Terapias Holísticas e Massoterapia</p>
    </header>
  );
}

function Home({ images, current, nextImage, prevImage }) {
  return (
    <div className="main-container">
      <div className="carousel">
        <button onClick={prevImage} className="carousel-btn">{"<"}</button>
        <img src={images[current]} alt="Massagem" className="carousel-img" />
        <button onClick={nextImage} className="carousel-btn">{">"}</button>
      </div>
      <Link to="/marcacao" className="marcar-link">Marque já a sua terapia!</Link>
      <footer className="footer">
        <span>☎️ +351 927 559 279</span> | 
        <a href="mailto:luz.indigo579@gmail.com">📨 luz.indigo579@gmail.com</a> |
        <a 
          href="https://wa.me/351927559279" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          💬 WhatsApp
        </a>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/Luz_indigo">
      <App />
    </Router>
  );
}

function App() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <BurgerMenu 
        open={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        isHome={isHome}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              images={images}
              current={current}
              nextImage={nextImage}
              prevImage={prevImage}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/marcacao" element={<Booking />} />
      </Routes>
    </>
  );
}

export default AppWrapper;