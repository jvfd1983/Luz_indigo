import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import "./App.css";

const images = [
  "/images/massagem1.png",
  "/images/massagem2.png",
  "/images/massagem3.png",
];

function Home({ images, current, nextImage, prevImage }) {
  return (
    <>
      <header className="header">
        <h1 className="title">Luz Indigo</h1>
        <p className="subtitle">Terapias Holísticas e Massoterapia</p>
      </header>
      <div className="main-container">
        <div className="carousel">
          <button onClick={prevImage} className="carousel-btn">{"<"}</button>
          <img src={images[current]} alt="Massagem" className="carousel-img" />
          <button onClick={nextImage} className="carousel-btn">{">"}</button>
        </div>
        <Link to="/contato" className="marcar-link">Marque já a sua terapia!</Link>
        <footer className="footer">
          <span>☎️+351 927 559 279</span> | <a href="mailto:luz.indigo579@gmail.com">📨 luz.indigo579@gmail.com</a>
        </footer>
      </div>
    </>
  );
}

function App() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <Router basename="/Luz_indigo">
      <Routes>
        <Route path="/" element={
          <Home
            images={images}
            current={current}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        } />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;