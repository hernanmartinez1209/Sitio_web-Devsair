import "./App.css";
import "./stylesComponents/style_Navbar.css";
import "./stylesComponents/style_Sobre_Nosotros.css";
import "./stylesPagues/style_Proyectos.css";
import "./stylesPagues/style_Services.css";
import "./stylesComponents/style_Contac.css";
import "./stylesComponents/style_cart.css";
import "./pruebascss/prueba.css";
import "./stylesComponents/styles_new_cart.css";
// import Navbar from "./components/Navbar";
import Page_Sobre_nosotros from "./pages/Page_Sobre_nosotros";
import Page_principal from "./pages/Page_principal";
 import { Page_proyectos } from './pages/Page_proyectos'
import Page_services from "./pages/Page_services";
import Page_contac_me from "./pages/Page_contac_me";
// import New_proyects from "./components/New_proyects";

function App() {
  return (
    <>
      <div className="app">
        {/* <Navbar /> */}
        <nav >
      <ul className='nav_Principal bg_nav '>
        <li><a href="#1">sobre nosotros</a></li>
        <li><a href="#2">Servicios</a></li>
        <li><a href="#3">Proyects</a></li>
        <li><a href="#4">Contactanos</a></li>
      </ul>
    </nav>
        <Page_principal  />
        <div id="1">
        <Page_Sobre_nosotros/>
        </div>
        <div id="2">
        <Page_services />
        </div>
        <div id="3">
        {/* <New_proyects /> */}
         <Page_proyectos /> 
        </div>
        <div id="4">
        <Page_contac_me />
        </div>
        <footer>© Todos los derechos reservados Devsair 2024</footer>
      </div>
    </>
  );
}

export default App;
