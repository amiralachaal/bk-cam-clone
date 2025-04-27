import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <img src="/img/logo-BKCAM-blackfont-291x81.png" alt="BK-CAM" className="logo" />
      <input type="text" placeholder="Rechercher un produit..." className="search-bar" />
      <div className="menu">
        <a href="#">PHOTO</a>
        <a href="#">VIDÉO</a>
        <a href="#">ÉCLAIRAGE</a>
        <a href="#">AUDIO</a>
        <a href="#">TRÉPIEDS</a>
        <a href="#">STABILISATEURS</a>
        <a href="#">HOUSSES</a>
        <a href="#">MACHINERIE</a>
      </div>
    </div>
  );
}

export default Navbar;
