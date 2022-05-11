import React, { Component }  from 'react';
import {connect} from 'react-redux'

import './FullPageLoader.css';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

class FullPageLoader extends React.Component{   

    renderLoader() {
        const {loading} = this.props;

        if(!loading) return null;

        return (
            <div className="loader-container">
                <div className="loader">
                    <Spinner animation="border" />
                </div>
            </div>
        );
    }

    render() {
        return this.renderLoader();
    }
}



const mapStateToProps = state => {
   return { loading: state.usuarios.loading };
 };
 
 export default connect(mapStateToProps)(FullPageLoader);