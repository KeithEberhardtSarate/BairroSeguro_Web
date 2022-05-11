import React from 'react';

import Card from '../components/Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Card value="1" title="Contas pendentes" />
                </Col>
                <Col>
                    <Card value="1" title="Emergências" />
                </Col>
                <Col>
                    <Card value="1" title="Denúncias" />
                </Col>
                <Col>
                    <Card value="1" title="Agentes" />
                </Col>
            </Row>
            <div>
                Mapa
            </div>
        </Container>
    );
}

export default Home;