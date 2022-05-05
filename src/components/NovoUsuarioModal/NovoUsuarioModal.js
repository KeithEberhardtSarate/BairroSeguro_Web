import React, { Component }  from 'react';
import {connect} from 'react-redux'

import { closeModal } from "../../actions";

import './NovoUsuarioModal.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class NovoUsuarioModal extends React.Component{  
    
    handleCloseModal = () => {
        this.props.closeModal();
    }

    renderModal() {
        const {showModal} = this.props;

        return (
            <Modal show={showModal} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Novo Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>TO DO</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleCloseModal}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={this.handleCloseModal}>
                    Salvar
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render() {
        return this.renderModal();
    }
}



const mapStateToProps = state => {
   return { showModal: state.usuarios.isModalOpen };
 };
 
 export default connect(mapStateToProps, { closeModal })(NovoUsuarioModal);