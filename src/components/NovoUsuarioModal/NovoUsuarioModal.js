import React, { Component }  from 'react';
import {connect} from 'react-redux'

import { closeModal } from "../../actions";
import { saveUsuarioState } from "../../actions";
import { createUsuario } from "../../actions";
import { fetchUsuarios } from "../../actions";

import './NovoUsuarioModal.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class NovoUsuarioModal extends React.Component{ 
    
    handleCloseModal = () => {
        this.props.closeModal();
    }

    handleSubmit = (event) => {
        const self = this;
        const {novoUsuarioForm} = this.props;
        debugger
        self.props.createUsuario(novoUsuarioForm).then((res) => {
            self.props.fetchUsuarios();
            self.clearUsuarioState();
        });
    }

    saveState = (campo, value) => {
        const {novoUsuarioForm} = this.props;

        const novoUsuario = {
            "nome": novoUsuarioForm.nome,
            "email": novoUsuarioForm.email,
            "telefone": novoUsuarioForm.telefone,
            "rua": novoUsuarioForm.rua,
            "numero": novoUsuarioForm.numero,
            "bairro": novoUsuarioForm.bairro,
            "cep": novoUsuarioForm.cep,
            "cidade": novoUsuarioForm.cidade,
            "estado": novoUsuarioForm.estado,
            "uf": novoUsuarioForm.uf,
            "nomeUsuario": novoUsuarioForm.nomeUsuario,
            "senha": novoUsuarioForm.senha,
            "tipo": novoUsuarioForm.tipo,
          }

          novoUsuario[campo] = value;

          this.props.saveUsuarioState(novoUsuario);
    }

    clearUsuarioState = () => {

        const usuarioEmBranco = {
            "nome": '',
            "email": '',
            "telefone": '',
            "rua": '',
            "numero": '',
            "bairro": '',
            "cep": '',
            "cidade": '',
            "estado": '',
            "uf": '',
            "nomeUsuario": '',
            "senha": '',
            "tipo": '',
          }

          this.props.saveUsuarioState(usuarioEmBranco);
    }

    renderModal() {
        const {showModal, formvalidated, novoUsuarioForm} = this.props;

        return (
            <Modal show={showModal} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Novo Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={formvalidated} onSubmit={this.handleSubmit}>
                        <Row className="mb-3 teste">
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nome"
                                    defaultValue={novoUsuarioForm.nome}
                                    onChange={e => {
                                        this.saveState('nome', e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email"
                                    defaultValue={novoUsuarioForm.email}
                                    onChange={e => {
                                        this.saveState('email', e.target.value);
                                    }}
                                />                           
                            </Form.Group>
                            <Form.Group controlId="validationCustom03">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Telefone"
                                    defaultValue={novoUsuarioForm.telefone}
                                    onChange={e => {
                                        this.saveState('telefone', e.target.value);
                                    }}
                                />                            
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control
                                    as="select"
                                    value={novoUsuarioForm.tipo}
                                    onChange={e => {
                                        this.saveState('tipo', e.target.value);
                                     }}
                                    >
                                    <option value="">Tipo</option>
                                    <option value="agente">Agente</option>
                                    <option value="administrador">Administrador</option>
                                </Form.Control>                        
                            </Form.Group>
                        </Row>                     
                        <Button onClick={() => this.handleSubmit()}>Salvar</Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={this.handleCloseModal}>
                        Salvar
                    </Button>
                </Modal.Footer> */}
            </Modal>
        );
    }

    render() {
        return this.renderModal();
    }
}



const mapStateToProps = state => {
   return { showModal: state.usuarios.isModalOpen, novoUsuarioForm: state.usuarios.novoUsuarioForm };
 };
 
 export default connect(mapStateToProps, { closeModal, saveUsuarioState, createUsuario, fetchUsuarios })(NovoUsuarioModal);