import React from "react";

const NavBar = () => {
    return(
        <div className="fondoBody">
            <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={"../Images/Logo1.png"}  alt={"Más Por Maths"} width={"100"}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navegacion" id="navbarNavAltMarkup">
                        <div className="navbar-nav items">
                            <a className="nav-link p-5" href="#">INICIO</a>
                            <a className="nav-link p-5" href="#">SERVICIOS</a>
                            <a className="nav-link p-5" href="#">POTENCIATE</a>
                            <a className="nav-link p-5" href="#">CURSOS</a>
                            <a className="nav-link p-5" href="#">CONTACTO</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
        
    )
}

export default NavBar;