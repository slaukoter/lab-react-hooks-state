import React from "react";

const Cart = ({ items }) => {
  return (
    <aside>
      <h2>Shopping Cart</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty.</p>
      )}
    </aside>
  );
};

export default Cart;
