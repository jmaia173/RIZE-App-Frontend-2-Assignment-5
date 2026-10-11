import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

// Layout and copy drafted with AI assistance (Claude), then edited by me.
function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero
        title="Level Up Your Game Library"
        subtitle="Discover top-rated games at prices you'll love."
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/1a1a2e/1a1a2e"
        onCtaClick={() => navigate("/products")}
      />

      <section className="home-info">
        <h2>Why Shop with Us?</h2>
        <div className="home-info-grid">
          <div className="home-info-card">
            <h3>🎮 Top Titles</h3>
            <p>Hand-picked games across action, sports, and strategy.</p>
          </div>
          <div className="home-info-card">
            <h3>💸 Great Prices</h3>
            <p>Competitive prices on the games you actually want to play.</p>
          </div>
          <div className="home-info-card">
            <h3>⚡ Fast Checkout</h3>
            <p>Add games to your cart and keep browsing. Your cart is saved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;