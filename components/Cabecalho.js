import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Galeria from './Galeria';

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>
          <Nav className="me-auto">
              <NavLink href="#action/3.1">Cursos</NavLink>
              <NavLink href="#action/3.2">Disciplinas</NavLink>
              <NavLink href="#action/3.3">Alunos</NavLink>
              <NavLink href="#action/3.4">Professores</NavLink>
              <NavLink href="#action/3.4">Turmas</NavLink>
              <NavLink href="#action/3.4">Salas</NavLink>
              <NavLink href="#action/3.4">Semestres</NavLink>
           
            <NavDropdown title="Séries" id="basic-nav-dropdown"></NavDropdown>
              
          </Nav>
        </Container>
      </Navbar>
    </>


  )
}

export default Cabecalho