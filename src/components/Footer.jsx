import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>The Secret Meal</h3>
          <p>Crafted with React, blood, sweat and tears.</p>
        </div>

        <div className="footer-info">
          <p>© {new Date().getFullYear()} Joao Costa</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;