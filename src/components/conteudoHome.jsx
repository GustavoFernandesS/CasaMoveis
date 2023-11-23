import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

import {  Card } from 'react-bootstrap';

function ConteudoHome(){
    return(
        <div style={{ backgroundColor: '#1A1841', minHeight: '100vh' }}>
                <Navbar bg="#1A1841" variant="dark" expand="lg">
        <Container>
          {/* Nome da loja na parte inferior esquerda */}
          <Navbar.Brand className="mb-0 h1">
            Casa Imoveis
          </Navbar.Brand>

          {/* Imagem centralizada na parte superior */}
          <Navbar.Brand className="mx-auto" >
            <img style={{margin: '0 auto', marginLeft: '500px', marginBottom: '50px'}}
              src="https://th.bing.com/th/id/OIG.FknWZWYy9623zvA0_QYJ?pid=ImgGn"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo"
              
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Opções de navegação na parte inferior direita */}
            <Nav className="ml-auto" style={{ margin: '0 auto', paddingLeft: '300px' }} >
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/cadastro">Cadastro Produtos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
      <Carousel>
      <Carousel.Item>
        <img height="500" width="250"
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/elegante-sala-de-estar-escandinava-com-moveis-de-sofa-de-menta-de-design-simulam-plantas-de-mapa-de-posteres-e-eleg_1258-152155.jpg?w=1800&t=st=1700707627~exp=1700708227~hmac=e85204cc0d1ba14b21ace42fcd7341ba4577869799944218cb5ca5afa58b2890"
        />
        <Carousel.Caption>
          <h3>Conjunto de imoveis para preencher sua sala</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height="500" width="250"
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/renderizacao-de-cozinha-contemporanea-3d_1048-17748.jpg?w=826&t=st=1700707675~exp=1700708275~hmac=e0d8df7fce44c88be70b5834a297d47b821e65fe9fd87f503734bfc3b7bb6c0a"
        />
        <Carousel.Caption>
          <h3>Conjunto de imoveis para preencher sua cozinha</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img height="500" width="250"
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/banheiro-pequeno-decorado-em-estilo-moderno_23-2150836639.jpg?w=826&t=st=1700707720~exp=1700708320~hmac=fb0d49be21dc0a963fd419bf61c9f8d0e813a72bdf4c44a3e975f0a6435f8e53"
        />
        <Carousel.Caption>
          <h3>Conunto de imoveis para preencher seu banheiro</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container className="mt-5" style={{color: '#fff'}}>
      <h1 className="text-center mb-4">Bem-vindo à Casa Imoveis</h1>
      <p className="text-center">
        Sua loja mais confiavel de imoveis e com o preço acessivel de todo o brasil
      </p>

      <Row className="justify-content-center mt-5">
        {/* Produto 1 */}
        <Col md={4} className="mb-4">
          <Card >
            <Card.Img variant="top" src="https://media.discordapp.net/attachments/535548992927563794/1177070091544834098/98.jpg?ex=65712af2&is=655eb5f2&hm=9282d97cce2879f28cd5878a848072af586883db155b87b582e4077e1b67bcff&=&format=webp&width=1202&height=676" height={500} width={100} />
            <Card.Body>
              <Card.Title>Sofa de pano italiano cinza</Card.Title>
              <Card.Text>
                Aqui na Casa Imoveis que você pode comprar seus imoveis com o melhor preço do mercado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Produto 2 */}
        <Col md={4} className="mb-4">
          <Card >
            <Card.Img variant="top" src="https://media.discordapp.net/attachments/535548992927563794/1177070092429820007/115.jpg?ex=65712af2&is=655eb5f2&hm=b2431ea8b5de29659024f0f8f66d8f97aeb9612f0fd4821fa8b2d786b9146ca0&=&format=webp&width=1202&height=676"  height={500} width={100}/>
            <Card.Body>
              <Card.Title>Poltrona de pano italiano cinza</Card.Title>
              <Card.Text>
              Aqui na Casa Imoveis que você pode comprar seus imoveis com o melhor preço do mercado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Produto 3 */}
        <Col md={4} className="mb-4">
          <Card >
            <Card.Img variant="top" src="https://media.discordapp.net/attachments/535548992927563794/1177070092429820007/115.jpg?ex=65712af2&is=655eb5f2&hm=b2431ea8b5de29659024f0f8f66d8f97aeb9612f0fd4821fa8b2d786b9146ca0&=&format=webp&width=1202&height=676" height={500} width={100} />
            <Card.Body>
              <Card.Title>Rack de marfim</Card.Title>
              <Card.Text>
              Aqui na Casa Imoveis que você pode comprar seus imoveis com o melhor preço do mercado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <div>
      <footer style={{ backgroundColor: '#1A1841', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h5>Fale conosco</h5>
        <p>11 94777-1128</p>
        <p>contato@casaimoveis.com</p>
        
        <h5>Redes Sociais</h5>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg> @Casa_imoveis
        </p>

        <h5>Localização</h5>
        <p>Rua calixto da mota, 34 - São Paulo, SP</p>
      </footer>
    </div>
        </div>
    )
}export default ConteudoHome