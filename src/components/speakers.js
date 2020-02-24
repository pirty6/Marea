import React, { Component } from "react"
import SpeakerClosed from "./speakerClosed"

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.spks = {}
    this.spks[1] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": " Apertura 10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen6.jpg"
    }
    this.spks[2] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen7.jpg"
    }
    this.spks[3] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen9.jpg"
    }
    this.spks[4] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen8.jpg"
    }
    this.spks[5] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen10.jpg"
    }
    this.spks[6] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen11.jpg"
    }
    this.spks[7] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/Imagen12.jpg"
    }
    this.state = {
      show: false,
      id: 0,
    }
  }

  component

  show(id) {
    this.setState({id: id, show: true});
  }

  close() {
    this.setState({id: 0, show: false});
  }

  render() {
    return (
      <div style={{display:`flex`, flexDirection:`column`, padding:`0px 20px`}}>
        <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`}}>
          <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>03</h1>
          <div style={{flex:`2`}}>
            <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
              <h1>&nbsp;{this.props.title}</h1>
            </div>
          </div>
        </div>
        {this.state.show ?
          <div style={{display:`flex`, paddingTop:`4rem`}}>
            <img src={this.spks[this.state.id].image} style={{cursor:`pointer`, flex:`1 1 auto`}} onClick={() => this.close()} />
            <div style={{alignSelf:`center`, flex:`1 1 auto`, paddingLeft:`4rem`}}>
              <h2 style={{marginBottom:`5px`}}>{this.spks[this.state.id].name}</h2>
              <h3 style={{fontWeight:`400`, fontSize:`2.5rem`, paddingTop:`0px`}}>{this.spks[this.state.id].schedule}</h3>
              <div style={{width:`55%`, paddingTop:`20px`}}>
                <p>{this.spks[this.state.id].text}</p>
                <div style={{display:`flex`, width:`50%`, justifyContent:`space-between`, alignItems:`center`, paddingTop:`20px`}}>
                  <button>Regístrate</button>
                  <h6 id="mas" style={{marginBlockEnd: `0`}}>Conoce más</h6>
                </div>
              </div>
            </div>
          </div>
          :
          null
        }
        <div style={{display:`flex`, width:`100%`, flexDirection:`column`,
          flexWrap: `wrap`, paddingTop:`4rem`, height:`120vw`, alignItems:`center`
        }}>
          {this.state.id !== 1 ? <SpeakerClosed
          image={this.spks[1].image}
          onClick={() => this.show(1)}/> : null}
          {this.state.id !== 2 ? <SpeakerClosed
          image={this.spks[2].image}
          onClick={() => this.show(2)}/> : null}
          {this.state.id !== 3 ? <SpeakerClosed
          image={this.spks[3].image}
          onClick={() => this.show(3)}/> : null}
          {this.state.id !== 4 ? <SpeakerClosed
          image={this.spks[4].image}
          onClick={() => this.show(4)}/> : null}
          {this.state.id !== 5 ? <SpeakerClosed
          image={this.spks[5].image}
          onClick={() => this.show(5)}/> : null}
          {this.state.id !== 6 ? <SpeakerClosed
          image={this.spks[6].image}
          onClick={() => this.show(6)}/> : null}
          {this.state.id !== 7 ? <SpeakerClosed
          image={this.spks[7].image}
          onClick={() => this.show(7)}/> : null}
        </div>
      </div>
    )
  }
}

export default Speakers
