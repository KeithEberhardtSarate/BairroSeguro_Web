import React from 'react';
import { connect } from 'react-redux';

import { fetchDashboard } from "../actions";

import Card from '../components/Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchDashboard();
    }
  
    renderHome() {
      return <div>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card value={this.props.dashboard.contasPendentes} title="Contas pendentes" />
                    </Col>
                    <Col>
                        <Card value={this.props.dashboard.escoltasSolicitadas} title="Escoltas solicitadas" />
                    </Col>
                    <Col>
                        <Card value={this.props.dashboard.escoltasEmAndamento} title="Escoltas em andamento" />
                    </Col>
                    <Col>
                        <Card value={this.props.dashboard.agentes} title="Agentes" />
                    </Col>
                </Row>
                {/* <div>
                    Mapa
                </div> */}
             </div>
    }
  
    render() {
      return <Container>{this.renderHome()}</Container>;
    }
}

const mapStateToProps = state => {
    return { dashboard: state.dashboard.dashboard };
};
  
export default connect(
    mapStateToProps,
    { fetchDashboard }
)(Home);