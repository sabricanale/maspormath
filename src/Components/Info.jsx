import React from "react";

const Info = () => {
    return(
        <div className="container">
            <div className="text-center mt-3 pt-3">
                <h1 className="claseh1">CLASES DE MATEMÁTICA ONLINE</h1>
            </div>
                
            <div className="row text-center">
                <div className="col-md-6 p-5">
                    <img src="./Images/Utiles.png" alt="Clases de matemática online" width={200} className="img-fluid"/>
                </div>
                <div className="col-md-5">
                    <p className="textoInfo bw-bold">Si necesitás acompañar tu cursada de clases, potenciar tus conocimientos, aprender de manera distinta utilizando nuevas estrategias de estudio... nosotras te ayudamos con todo lo que te propongas!</p>
                    <button className="botonBeige ">QUIERO CONTACTARME</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Info;