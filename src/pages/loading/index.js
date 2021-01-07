import React from 'react'
import LogoPokemon from '../../assets/images/logopokemon.svg';

const Loading = () => {
    return (
        <div>
            {/* <div className="position-absolute" style={{ backgroundColor: "#FF6961", height: "50vh", width: "100vw" }}></div> */}
            
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <img className="rotating position-absolute" src={LogoPokemon} alt="Logo Pokemon" style={{ opacity: "0.2", width: "26rem" }} />
                <h3 className="position-absolute text-center fw-bold" src={LogoPokemon} alt="Logo Pokemon" style={{ color: "white", width: "20rem" }}>Please Wait...</h3>
                
            </div>
            
        </div>
    )
}

export default Loading
