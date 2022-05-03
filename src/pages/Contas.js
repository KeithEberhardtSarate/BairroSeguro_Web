import React from 'react';

import {useSelector} from 'react-redux'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Contas = () => {
    const contaList = useSelector((state) => state.contas.value);

    return (
        <Container>
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
                    </tr>
                </thead>
                <tbody>
                    {contaList.map(conta => {
                      return <tr>
                              <td>{conta.id}</td>
                              <td>{conta.nome}</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                    })}                  
                </tbody>
            </Table>
        </Container>
    );
}

export default Contas;