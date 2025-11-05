import React, { useState, useMemo } from "react";
import ProductList, { sampleProducts } from "./components/ProductList"; // ✅ import sampleProducts
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(sampleProducts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (category === "All") return sampleProducts;
    return sampleProducts.filter((p) => p.category === category);
  }, [category]);

  function handleAddToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  return (
    <div
      className={darkMode ? "theme-dark" : "theme-light"}
      style={{ minHeight: "100vh" }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label htmlFor="category-select">Filter by Category: </label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        {categories
          .filter((c) => c !== "All")
          .map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
      </select>

      <ProductList products={filteredProducts} onAdd={handleAddToCart} />
      <Cart items={cart} />
    </div>
  );
};

export default App;
