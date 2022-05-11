import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchContas } from "../actions";
import { ativaConta } from "../actions";
import { desativaConta } from "../actions";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FullPageLoader from '../components/FullPageLoader/FullPageLoader'

class Contas extends React.Component {
    componentDidMount() {
      this.props.fetchContas();
    }

    handleAtivarConta = (conta) => {
      const self = this;
      if(conta.isAtiva){
        self.props.desativaConta(conta.id).then((res) => {
          self.props.fetchContas();
        });
      }else{
        self.props.ativaConta(conta.id).then((res) => {
          self.props.fetchContas();
        });        
      }      
  }
  
    renderList() {
      return <div id="contasPage">                    
                    <div className='page-title'>
                      <h1>Contas</h1>
                    </div>            
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
                                        <td>{conta.isAtiva 
                                            ? <Button variant="primary" size="sm" onClick={() => this.handleAtivarConta(conta)}>Desativar</Button>
                                            : <Button variant="danger" size="sm" onClick={() => this.handleAtivarConta(conta)}>Ativar</Button>
                                          }
                                        </td>                                          
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
    { fetchContas, ativaConta, desativaConta }
  )(Contas);