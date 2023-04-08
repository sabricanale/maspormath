import Carrusel from "./Components/Carrusel";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Info from "./Components/Info";
import Somos from "./Components/Somos";
import Cards from "./Components/Cards";
import Potenciate from "./Components/Potenciate";
import Redes from "./Components/Redes";

function App() {
  return (
    <div>
        <NavBar/>
        <Carrusel/>
        <Info/>
        <Somos/>
        <Cards/>
        <Potenciate/>
        <Redes/>
        <Footer/>
    </div>    
  );
}

export default App;
