import "./Footer.css";

function Footer({ storeName, tagline, email, phone, address, hours }) {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>{storeName}</h3>
        <p>{tagline}</p>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>

      <div className="footer-section">
        <h4>Store Hours</h4>
        <p>{hours}</p>
      </div>

      <p className="footer-copyright">
        © 2026 {storeName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;