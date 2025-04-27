import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      {/* Bandeau haut */}
      <div className="top-bar">
        <div className="contact-info">
          <span>+216 53 660 698</span> | <span>Sales1@bk-cam.com</span>
        </div>
        <div className="quick-links">
          <span>Qui sommes nous</span> | <span>+216 2544 0740</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <img src="/img/logo-BKCAM-blackfont-291x81.png" className="logo" />
        <input type="text" className="search-bar" placeholder="Rechercher un produit..." />
      </header>

      {/* Menu rouge */}
      <nav className="red-menu">
        <a href="#">PHOTO</a>
        <a href="#">VIDÉO</a>
        <a href="#">ÉCLAIRAGE</a>
        <a href="#">AUDIO</a>
        <a href="#">TRÉPIEDS</a>
        <a href="#">STABILISATEURS</a>
        <a href="#">HOUSSES</a>
        <a href="#">MACHINERIE</a>
      </nav>

      {/* Carrousel */}
      <section className="carousel">
        <img src="/img/1.png" alt="Carrousel principal" className="carousel-image" />
      </section>

      {/* Produits récents */}
      <section className="product-section">
        <h2>Les plus récents</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/img/2.jpg" alt="Produit 1" />
            <p>New Year Sales</p>
          </div>
          <div className="product-card">
            <img src="/img/3.jpg" alt="Produit 2" />
            <p>New Year Sales</p>
          </div>
          <div className="product-card">
            <img src="/img/3.jpg" alt="Produit 2" />
            <p>New Year Sales</p>
          </div>
          <div className="product-card">
            <img src="/img/3.jpg" alt="Produit 2" />
            <p>New Year Sales</p>
          </div>
          <div className="product-card">
            <img src="/img/4.jpg" alt="Produit 3" />
            <p>New Year Sales</p>
          </div>
          {/* Tu peux rajouter plus de produits ici */}
        </div>
      </section>

     {/* Footer amélioré */}
<footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="/images/logo.png" alt="BK-CAM Logo" />
      <p>Voice Your Passion, Budget Your Way</p>
    </div>
    <div className="footer-links">
      <a href="#">Accueil</a>
      <a href="#">Produits</a>
      <a href="#">Contact</a>
      <a href="#">À propos</a>
    </div>
    <div className="footer-contact">
      <p>Email : Sales1@bk-cam.com</p>
      <p>Téléphone : +216 53 660 698</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 BK-CAM - Tous droits réservés.</p>
  </div>
</footer>

    </div>
  );
}

export default App;
