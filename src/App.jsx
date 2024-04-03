import "./App.css";
import "./stylesComponents/style_Navbar.css";
import "./stylesComponents/style_Sobre_Nosotros.css";
import "./stylesPagues/style_Proyectos.css";
import "./stylesPagues/style_Services.css";
import "./stylesComponents/style_Contac.css";
import "./stylesComponents/style_cart.css";
import "./pruebascss/prueba.css";
import "./stylesComponents/styles_new_cart.css";
import Navbar from "./components/Navbar";
import Page_Sobre_nosotros from "./pages/Page_Sobre_nosotros";
import Page_principal from "./pages/Page_principal";
// import { Page_proyectos } from './pages/Page_proyectos'
import Page_services from "./pages/Page_services";
import Page_contac_me from "./pages/Page_contac_me";
import New_proyects from "./components/New_proyects";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Page_principal />
        <Page_Sobre_nosotros />
        <Page_services />
        <New_proyects />
        {/* <Page_proyectos /> */}
        <Page_contac_me />
        <footer>© Todos los derechos reservados Devsair 2024</footer>
      </div>
    </>
  );
}

export default App;
