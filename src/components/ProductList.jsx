import React from "react";
import ProductCard from "./ProductCard";

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

const ProductList = ({ products = sampleProducts, onAdd }) => {
  // Show if there are no products
  if (!products.length) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
