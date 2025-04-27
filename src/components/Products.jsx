import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: "Canon EOS R5", price: 3899, image: "/assets/product1.jpg" },
    { id: 2, name: "Objectif 24-70mm", price: 1299, image: "/assets/product2.jpg" }
  ];

  return (
    <section className="products">
      <h2>Nos Produits Phares</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;