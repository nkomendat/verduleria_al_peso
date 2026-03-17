import React from 'react';
import '../App.css';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
  const telefono = "Contacto: 1234-5678";

  return (
    <footer className="footer-fixed">
      
      <a
        href={`https://wa.me/12345678`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="footer-icon" />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="footer-icon" />
      </a>

      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook className="footer-icon" />
      </a>

      <span className="footer-phone">
        <FaPhone className="footer-icon" />
        <span className="phone-tooltip">{telefono}</span>
      </span>

    </footer>
  );
};

export default Footer;