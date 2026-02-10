import React from 'react';
import '../App.css';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer-fixed">
      <FaWhatsapp className="footer-icon" />
      <FaInstagram className="footer-icon" />
      <IoLogoFacebook className="footer-icon" />
      <FaPhone className="footer-icon" />
    </footer>
  );
};

export default Footer;
