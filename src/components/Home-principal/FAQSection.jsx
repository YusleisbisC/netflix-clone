import React, { useState } from 'react';
import './FAQSection.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

export function FAQSection() {
  const [isOpen, setIsOpen] = useState(Array(6).fill(false)); // Un estado para controlar el estado abierto/cerrado de cada pregunta

  const toggleAccordion = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  return (
    <div className="faq-section">
      <h2>Perguntas frequentes</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header">
              <button aria-expanded="false"
                className={`accordion-button ${isOpen[index] ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${isOpen[index] ? 'show' : ''}`}
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='conta'>
     <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
          <div className="home__input">
            <input type="email" placeholder="Endereço de e-mail" />
            {/* Agrega un botón para continuar */}
            <button>Vamos lá</button>
          </div>
  </div>
    </div>

  );
}

// Datos de preguntas frecuentes (reemplaza esto con tus propias preguntas y respuestas)
const faqData = [
  {
    question: 'O que é a Netflix?',
    answer: 'A Netflix é uma plataforma de streaming que oferece uma ampla variedade de filmes, séries, documentários e muito mais para assistir online em diversos dispositivos.',
  },
  {
    question: 'Quanto custa a Netflix?',
    answer: 'A Netflix oferece diferentes planos de assinatura com preços variados. Você pode verificar os preços e planos no site oficial da Netflix.',
  },
  {
    question: 'Onde posso assistir?',
    answer: 'Você pode assistir à Netflix em uma variedade de dispositivos, incluindo Smart TVs, computadores, tablets, smartphones, consoles de videogame e muito mais.',
  },
  {
    question: 'Como faço para cancelar?',
    answer: 'Cancelar sua assinatura da Netflix é fácil. Basta acessar sua conta no site da Netflix e seguir as instruções para cancelar a assinatura a qualquer momento.',
  },
  {
    question: 'O que eu posso assistir na Netflix?',
    answer: 'Você pode assistir a uma grande variedade de conteúdo na Netflix, incluindo filmes, séries, programas de TV, documentários e muito mais. A biblioteca de conteúdo é atualizada regularmente.',
  },
  {
    question: 'A Netflix é adequada para crianças?',
    answer: 'Sim, a Netflix oferece um recurso de controle dos pais que permite criar perfis específicos para crianças e restringir o acesso a conteúdo inadequado para a idade.',
  },

 
];
