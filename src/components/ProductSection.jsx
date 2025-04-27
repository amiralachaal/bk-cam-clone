import React from 'react';


function ProductSection() {
  return (
    <div className="products">
      <h2>Les plus récents</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="/images/product1.png" alt="Produit 1" />
          <p>New Year Sales</p>
        </div>
        <div className="product-card">
          <img src="/images/product2.png" alt="Produit 2" />
          <p>New Year Sales</p>
        </div>
        <div className="product-card">
          <img src="/images/product3.png" alt="Produit 3" />
          <p>New Year Sales</p>
        </div>
        {/* Ajoute plus de produits ici */}
      </div>
    </div>
  );
}

export default ProductSection;
