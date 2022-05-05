import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchUsuarios } from "../actions";
import { openModal } from "../actions";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FullPageLoader from '../components/FullPageLoader/FullPageLoader'
import NovoUsuarioModal from '../components/NovoUsuarioModal/NovoUsuarioModal'

class Usuarios extends React.Component {
    componentDidMount() {
      this.props.fetchUsuarios();
    }

    handleOpenModal = () => {
        this.props.openModal();
    }
  
    renderList() {
      return <div id="usuariosPage">
                    <h1>Usuários</h1>           
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Tipo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.usuarios.map(usuario => {
                                return <tr>
                                        <td>{usuario._id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefone}</td>
                                        <td>{usuario.tipo}</td>
                                        <td>
                                            <Button variant="primary" size="sm" onClick={this.handleOpenModal}>Editar</Button>{' '}
                                            <Button variant="danger" size="sm">Excluir</Button>
                                        </td>
                                    </tr>
                            })}                  
                        </tbody>
                    </Table>
                    <FullPageLoader />
                    <NovoUsuarioModal />                    
                </div>                
    }
    
    render() {        
      return <Container>{this.renderList()}</Container>;
    }
  }
  
  const mapStateToProps = state => {
    return { usuarios: state.usuarios.usuarios };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUsuarios, openModal }
  )(Usuarios);