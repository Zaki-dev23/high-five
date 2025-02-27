import React from 'react';
import './footer.css'; // Assurez-vous d'importer vos styles CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Liens Rapides</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À Propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email : contact@example.com</p>
          <p>Téléphone : +212 23 45 67 89</p>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;  Mon Site Web. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;