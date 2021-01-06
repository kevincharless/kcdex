import React from 'react'
import {
    Col,
    Container,
    Row,
    Progress
} from 'reactstrap';

const CardDetailBaseStats = (props) => {
    console.log(props.pokemon)
    return (
        <Container className="py-5" style={{ height: "70vh" }}>
            <Row>
                <Col xs="6"><h3 className="fw-bold">Base Stats</h3></Col>
            </Row>
            <Row>
                <Col className="fs-5" xs="3" md="2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    <span className="d-block">HP</span>
                    <span className="d-block">Attack</span>
                    <span className="d-block">Deffense</span>
                    <span className="d-block">Sp. Atk</span>
                    <span className="d-block">Sp. Def</span>
                    <span className="d-block">Speed</span>
                    <span className="d-block">Total</span>
                </Col>
                <Col className="fs-5" xs="3" md="2">
                    {props.pokemon.stats.map(stat => 
                        <span className="d-block">{stat.base_stat}</span>
                    )}
                    <span className="d-block fw-bold">
                        {props.pokemon.stats.reduce(function(total, stat) {
                            return total + stat.base_stat
                        }, 0)}
                    </span>
                </Col>
                <Col className="fs-5" xs="6" md="8">
                    {props.pokemon.stats.map(stat =>{
                        let color;
                        if(stat.base_stat < 60) {
                            color = "#FF6961"
                        } else if(stat.base_stat < 90) {
                            color = "#FDDD5C"
                        } else {
                            color = "#77DD77"
                        }

                        return <span className="d-block"><Progress className="mb-3" value={stat.base_stat} max="255" style={{ borderRadius: "5rem", backgroundColor: `${color}` }} /></span>
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default CardDetailBaseStats
