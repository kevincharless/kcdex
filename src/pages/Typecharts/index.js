import React from 'react';
import Navbar from '../../components/NavBar/index';
import TypeChart from '../../assets/images/typechart.jpg';
import { Container, Row } from 'reactstrap';

const TypeCharts = () => {

    return (
        <>
            <Navbar 
                title="Type"
                backgroundColor="#A890F0"
            />
            <Container className="pt-3">
            
                <Row>
                    <h1 className="fw-bold">Type Charts</h1>
                </Row>
                <Row>
                    <img src={TypeChart} alt="Pokemon Type Charts" />
                </Row>
            </Container>
        </>
    )
}

export default TypeCharts
