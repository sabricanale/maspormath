import React from "react";

const Footer = () => {
    return(
        <footer className="fw-bold">
            <div className="row">
                <div className="col p-3">
                    <div className="d-flex justify-content-center">
                        <p>Derechos reservados a  <a href={"/"}><img src={"../Images/LogoReducido.png"} alt={"Logo Más Por Maths"} width={50} /></a> +xMaths</p> 
                    </div>
                    <div className="text-center" >
                         <p >Sitio desarrollado por <a className="hipervinculo" href="https://sabricanale.github.io/portfolio/">Desarrolladoras Web Córdoba</a></p>
                    </div>
                </div>    
            </div>
        </footer>
    )
}

export default Footer;

