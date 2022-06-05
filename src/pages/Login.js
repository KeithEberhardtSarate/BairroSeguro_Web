import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { fetchUsuarios } from "../actions";

//import Table from 'react-bootstrap/Table';

class Login extends React.Component {
    componentDidMount() {
      //this.props.fetchUsuarios();
    }
  
    renderLoginForm() {
      return <div>
                Login form aqui             
             </div>                
    }
    
    render() {        
      return <Container>{this.renderLoginForm()}</Container>;
    }
  }
  
  const mapStateToProps = state => {
    return { usuarios: state.usuarios.usuarios };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUsuarios }
  )(Login);