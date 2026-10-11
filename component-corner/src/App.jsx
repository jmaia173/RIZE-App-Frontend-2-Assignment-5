import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

const products = [
  {
    id: 1,
    name: "Elden Ring",
    price: 59.99,
    image: "https://placehold.co/600x400?text=Elden+Ring",
    description: "An open-world action RPG set in the Lands Between.",
  },
  {
    id: 2,
    name: "FIFA 26",
    price: 69.99,
    image: "https://placehold.co/600x400?text=FIFA+26",
    description:
      "The latest football simulation with updated teams, players, and game modes.",
  },
  {
    id: 3,
    name: "Grand Theft Auto V",
    price: 29.99,
    image: "https://placehold.co/600x400?text=GTA+V",
    description:
      "An open-world crime adventure across the streets of Los Santos.",
  },
  {
    id: 4,
    name: "Football Manager 26",
    price: 59.99,
    image: "https://placehold.co/600x400?text=Football+Manager+26",
    description:
      "Build your squad, set your tactics, and manage your club to glory.",
  },
  {
    id: 5,
    name: "Call of Duty: Black Ops Cold War",
    price: 39.99,
    image: "https://placehold.co/600x400?text=Black+Ops+Cold+War",
    description:
      "A Cold War-era first-person shooter with a campaign, multiplayer, and Zombies.",
  },
];

function App() {
  // Load the saved cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Filters by position so removing one copy doesn't remove duplicates
  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <BrowserRouter>
      <Header storeName="ComponentCorner Games" cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetailsPage products={products} addToCart={addToCart} />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>

      <Footer
        storeName="ComponentCorner Games"
        tagline="Your one-stop shop for the best video games."
        email="support@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Pixel Street, Game City, USA"
        hours="Mon–Fri: 9am–6pm"
      />
    </BrowserRouter>
  );
}

export default App;