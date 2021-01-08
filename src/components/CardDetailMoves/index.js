import React from 'react';
import { Col, Table } from 'reactstrap';

import { filterMoveLevelUp } from '../../util/filterMoveLevelUp';

const CardDetailMoves = (props) => {
    
    if(!props.pokemon) return null
    if(!props.pokemonMoveDetail) return null
    return (
        <>
            <Col className="py-5" sm="12" lg="6">
                <h3 className="fw-bold">Moves Learnt by Level Up</h3>
                <Table responsive>
                    <thead className="text-center" style={{ backgroundColor: "#FF6961", color: "#F6F6F6", borderRadius: "1rem" }}>
                        <tr >
                            <th>Level</th>
                            <th>Moves</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Power</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    
                    <tbody className="text-center">
                        {props.pokemonMoveDetail?.map((moveDetail, index)=>
                            <tr style={{ borderBottom: "0.15rem solid #FF6961" }} key={index}>
                                <th>{filterMoveLevelUp(props.pokemon?.moves)[index]?.version_group_details[0]?.level_learned_at}</th>
                                <td>{moveDetail.name}</td>
                                <td>{moveDetail.type.name}</td>
                                <td>{moveDetail.damage_class.name}</td>
                                <td>{
                                    moveDetail.power || 0}
                                </td>
                                <td>{moveDetail.accuracy || 0}</td>
                            </tr>
                        )}
                    </tbody>
                    
                </Table>
            </Col>

            <Col className="py-5" sm="12" lg="6">
                <h3 className="fw-bold">Moves Learnt by TM</h3>
                <Table responsive>
                    <thead className="text-center" style={{ backgroundColor: "#FF6961", color: "#F6F6F6", borderRadius: "1rem" }}>
                        <tr >
                            <th>Moves</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Power</th>
                            <th>Accuracy</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {props.pokemonMoveDetailTM.map((moveDetailTM, index)=>
                                <tr style={{ borderBottom: "0.15rem solid #FF6961" }} key={index}>
                                    <td>{moveDetailTM.name}</td>
                                    <td>{moveDetailTM.type.name}</td>
                                    <td>{moveDetailTM.damage_class.name}</td>
                                    <td>{
                                        moveDetailTM.power || 0}
                                    </td>
                                    <td>{moveDetailTM.accuracy || 0}</td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </Col>
        </>
    )
}

export default CardDetailMoves
