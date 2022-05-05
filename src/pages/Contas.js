import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchContas } from "../actions";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FullPageLoader from '../components/FullPageLoader/FullPageLoader'

class Contas extends React.Component {
    componentDidMount() {
      this.props.fetchContas();
    }
  
    renderList() {
      return <div id="contasPage">
                    <h1>Contas</h1>           
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>QtdUsuários</th>
                                <th>Status</th>
                                <th>Vencimento</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.contas.map(conta => {
                                return <tr>
                                        <td>{conta.id}</td>
                                        <td>{conta.nome}</td>
                                        <td>{conta.email}</td>
                                        <td>{conta.telefone}</td>
                                        <td>{conta.qtdUsuarios}</td>
                                        <td>{conta.isAtiva ? 'Ativa' : 'Pendente'}</td>
                                        <td>{conta.dataCriacao}</td>
                                        <td><Button variant="primary" size="sm">{conta.isAtiva ? 'Desativar' : 'Ativar'}</Button></td>
                                    </tr>
                            })}                  
                        </tbody>
                    </Table>
                    <FullPageLoader />
                </div>
    }
  
    render() {
      return <Container>{this.renderList()}</Container>;
    }
  }
  
  const mapStateToProps = state => {
    return { contas: state.contas.contas };
  };
  
  export default connect(
    mapStateToProps,
    { fetchContas }
  )(Contas);