import React from 'react';
import './MainSection.css'; // Asegúrate de crear un archivo CSS correspondiente
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export function MainSection() {
  return (
    <div className="home__main">
       
      <Container>
        <Row>
          <Col xs={12} sm={6} md={8}>
            <div className="home__text">
              <h1>Filmes, séries e muito mais, sem limites</h1>
              <h2>Assista onde quiser. Cancele quando quiser.</h2>
              <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="home__input">
              <input type="email" placeholder="Endereço de e-mail" className="form-control" />
              {/* Agrega un botón para continuar */}
              <Button variant="danger">Vamos lá</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
