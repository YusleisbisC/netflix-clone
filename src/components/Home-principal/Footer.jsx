import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="#">Dúvidas? Ligue 0800 591 2876</a>
        <a href="#">Perguntas frequentes</a>
        <a href="#">Central de Ajuda</a>
        <a href="#">Conta</a>
        <a href="#">Media Center</a>
        <a href="#">Relações com investidores</a>
        <a href="#">Carreiras</a>
        <a href="#">Resgatar cartão pré-pago</a>
        <a href="#">Comprar cartão pré-pago</a>
        <a href="#">Formas de assistir</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Privacidade</a>
        <a href="#">Preferências de cookies</a>
        <a href="#">Informações corporativas</a>
        <a href="#">Entre em contato</a>
        <a href="#">Teste de velocidade</a>
        <a href="#">Avisos legais</a>
      </div>
      <div className="footer__language">
        <p>Só na Netflix</p>
        <select>
          <option value="pt-BR">Português</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
