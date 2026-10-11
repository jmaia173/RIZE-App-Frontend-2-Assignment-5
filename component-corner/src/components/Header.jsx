import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1 className="header-title">{storeName}</h1>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Games</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Link to="/cart" className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;