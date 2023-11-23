import React from 'react';
import './CadastroProdutos.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

function CadastroProdutos() {
  return (
    <div className="container">

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

      <h1>Cadastro de Produtos</h1>
      <form className="formulario">
        <div className="campo">
          <label htmlFor="id_produtomoveis">ID do Produto Móveis:</label>
          <input type="text" id="id_produtomoveis" name="id_produtomoveis" />
        </div>
        <div className="campo">
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" name="descricao" />
        </div>
        <div className="campo">
          <label htmlFor="marca">Marca:</label>
          <input type="text" id="marca" name="marca" />
        </div>
        <div className="campo">
          <label htmlFor="dataFabricacao">Data de Fabricação:</label>
          <input type="date" id="dataFabricacao" name="dataFabricacao" />
        </div>
        <div className="campo">
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
          <input type="number" id="quantidadeEstoque" name="quantidadeEstoque" />
        </div>
        <div className="campo">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroProdutos;