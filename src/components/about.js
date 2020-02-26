import React, { Component } from "react"

class About extends Component {
  render() {
    return (
      <div style={{minHeight:`100vh`, display:`flex`, flexDirection:`column`,
      justifyContent:`center`, padding:`20px`}}>
        <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`}}>
          <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>01</h1>
          <div style={{flex:`2`}}>
            <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
              <h1>&nbsp;Acerca de</h1>
            </div>
            <div style={{maxWidth: `65%`, paddingTop:`3rem`}}>
                <h4>Marea: la nueva ola es un congreso que busca
                recuperar, con perspectiva de género, la
                participación contemporánea de mujeres en
                distintas disciplinas y construir redes sororales
                desde lxs estudiantes.</h4>
                <p>

                Este proyecto surge a partir de Marea —un colectivo feminista
                independiente formado por estudiantes del Tecnológico de
                Monterrey campus Querétaro— y la Sociedad de Alumnas/os
                de Comunicación.
                </p>
                <p>
                El congreso se llevará a cabo el viernes 27 de marzo del 2020
                en las instalaciones del Tecnológico de Monterrey campus
                Querétaro, siendo este un evento abierto a todo el público en el
                cual se busca abrir el diálogo desde la inclusión.
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
