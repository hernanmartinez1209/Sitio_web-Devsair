import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Page_proyectos = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className='Principal_proyectos'>
       <div className='minicart__box'>
        <h2 className="title_proyec">Nuestros Proyectos</h2>
        <Slider {...settings}>
          <div className="minicar_cg">
            <span className="title__card-proyet">E-comers</span>
            <a
              href="https://gleeful-palmier-10a03c.netlify.app/#/"
              target="blank"
            >
              <img
                className="img1p"
                src="./imgs/ecomers.PNG"
                alt="img__minicart"
                width="127px"
              />
            </a>
            <p className="info__sitio">
              Una aplicación desarrollada donde los usuarios pueden hacer uso de
              todas las funciones de una tienda en línea de electrónicos
            </p>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-redux"></i>
              </li>
            </ul>
          </div>
          <div className="minicar2_cg">
            <span className="title__card-proyet">Pokedex</span>
            <p className="info__sitio">
              En esta aplicación se desarrolló una interfaz amigable con el
              usuario donde el mismo puede buscar por nombre su pokemon favorito
              seleccionar para mostrar por tipo y al dar click en una cart
              especifica se muestra la información completa del pokemon
              seleccionado{" "}
            </p>
            <a
              href="https://boisterous-semolina-be258d.netlify.app/"
              target="blank"
            >
              <img src="./imgs/pokedex.PNG" alt="img__minicart" width="627px" />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-redux"></i>
              </li>
            </ul>
          </div>
          <div className="minicar3_cg">
            <span className="title__card-proyet">Users Crud</span>
            <p className="info__sitio">
              En esta aplicación se desarrolló un formulario para crear un
              usuario y renderizar en la pantalla luego la cart del usuario
              tiene dos botones de editar: con el cual actualizaremos la
              información del usuario y eliminar cuando el usuario no sea
              requerido.
            </p>
            <a href="https://usercrudg18.netlify.app/" target="blank">
              <img
                src="./imgs/usersCrud.PNG"
                alt="img__minicart"
                width="627px"
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-redux"></i>
              </li>
            </ul>
          </div>
          <div className="minicar4_cg">
            <span className="title__card-proyet">Rick And Morty</span>
            <p className="info__sitio">
              Es esta aplicación es amigable con el usuario en la cual se
              despliegan los diferentes personajes de esta serie en la cual se
              muestra el estado en que se encuentran los personajes en el
              momento se muestra su nombre su especie y su localización dentro
              de la serie.
            </p>
            <a href="https://spiffy-mousse-10ac4c.netlify.app/" target="blank">
              <img
                src="./imgs/rickandmory.PNG"
                alt="img__minicart"
                width="627px"
                height={"340px"}
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-redux"></i>
              </li>
            </ul>
          </div>
          <div className="minicar5_cg">
            <span className="title__card-proyet">Wearther App</span>
            <p className="info__sitio">
              En esta aplicación que muestra el clima y tiene un botón para
              convertir los grados de Celsius a Fahrenheit.
            </p>
            <a href="https://weatherappg18.netlify.app/" target="blank">
              <img
                src="./imgs/weartherApp.PNG"
                alt="img__minicart"
                width="627px"
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
            </ul>
          </div>
          <div className="minicar6_cg">
            <span className="title__card-proyet">Cart Ramdom Phrases App</span>
            <p className="info__sitio">
              Esta es una aplicación que muestra frases en randóm de diferentes
              filósofos .
            </p>
            <a href="https://cartdquotesg18.netlify.app/" target="blank">
              <img
                src="./imgs/cartRamdom.PNG"
                alt="img__minicart"
                width="627px"
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-react"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
            </ul>
          </div>
          <div className="minicar7_cg">
            <span className="title__card-proyet">Gamer Center</span>
            <p className="info__sitio">
              Este es un sitio web basado en un E-comerse es un Gamer store para
              los amantes de los videojuegos desarrollado en JavaScript vanilla,
              HTML, CSS Y como un mini back-end un archivo JSON para traer los
              datos .
            </p>
            <a
              href="https://coruscating-salamander-f29ff2.netlify.app/"
              target="blank"
            >
              <img
                src="./imgs/gamerCenter.PNG"
                alt="img__minicart"
                width="627px"
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
            </ul>
          </div>
          <div className="minicar8_cg">
            <span className="title__card-proyet">E-comers Fundamentos</span>
            <p className="info__sitio">
              Este es un sitio web basado en un E-comerse desarrollado en
              JavaScript vanilla, HTML, CSS Y como un mini back-end un archivo
              JSON para traer los datos de los artículos.
            </p>
            <a href="https://stalwart-wisp-c6a773.netlify.app/" target="blank">
              <img
                src="./imgs/ecomers-fundamentos.PNG"
                alt="img__minicart"
                width="627px"
              />
            </a>
            <ul className="contain__icons">
              <li>
                <i className="icon_tecnologi bx bxl-html5"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-css3"></i>
              </li>
              <li>
                <i className="icon_tecnologi bx bxl-javascript"></i>
              </li>
            </ul>
          </div>
          {/* </ul> */}
        </Slider>
      </div>
    </div>
  )
}
