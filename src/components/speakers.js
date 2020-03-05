import React, { Component } from "react"
import SpeakerClosed from "./speakerClosed"

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.spks = {}
    this.spks[1] = {
      "name": "Alondra Jímenez",
      "text": "Licenciada en Ciencias y Técnicas de la Comunicación. Fue reportera de espectáculos y cultura en Querétaro con publicaciones en el Diario de Querétaro. Además, cuenta con formación como cineasta por parte del Centro Nacional de las Artes (CENART) y el Instituto Mexicano de Cinematografía (IMCINE). En el 2017 presentó un proyecto en el Festival Itinerante de Cine Documental AMBULANTE. Desde el 2017 se desempeña como coordinadora de producción audiovisual en DOQUMENTA.",
      "schedule": "Desembocaduras: 10:00 - 11:00",
      "link": "https://www.linkedin.com/in/alondra-jim%C3%A9nez-estrada-18207b179/",
      "image": "./images/AlondraJimenez.jpg"
    }
    this.spks[2] = {
      "name": "Lucia Martín López",
      "text": "Arquitecta, docente e investigadora que centra su trabajo en la vivienda. Estudió en la Universidad Politécnica de Madrid con mención internacional cum laude y Premio extraordinario de Doctorado. Fue coordinadora del Centro de Investigación en Arquitectura de la Universidad Anáhuac en México. En el 2018 fue seleccionada para exponer en el Pabellón de España de la 16º Bienal de Arquitectura de Venecia. Además, ha publicado en revistas de diversos países. Actualmente es docente del Tecnológico de Monterrey.",
      "schedule": "Desembocaduras: 10:00 - 11:00",
      "link": "http://www.luciamartinlopez.com/",
      "image": "./images/LuciaMartin.jpg"
    }
    this.spks[3] = {
      "name": "Tania Hernández",
      "text": "Cineasta. Estudió una licenciatura de Cine en Centro de Diseño, Cine y TV (Ciudad de México), así como un posgrado en Edición y un Master en Documental de Creación, ambos en la Universidad Pompeu Fabra (Barcelona). Ha sido becada como directora bajo el programa Borderline, Fest Associaçao Cultural, Espinho, Portugal (2012) y en Interaction Documentary Camp en Pozega, Serbia (2013). TITIXE, su primer largometraje documental, ha recogido premios y menciones en varios festivales internacionales de cine.",
      "schedule": "Después del Temporal: 10:00 - 11:00",
      "link": "https://www.taniahernandezvelas.co/TITIXE",
      "image": "./images/TaniaHernandez.JPG"
    }
    this.spks[4] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "Contracorriente: 10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/AndreaMedina.JPG"
    }
    this.spks[7] = {
      "name": "Elsa M. Treviño",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "Desembocaduras: 10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/ElsaMTrevino.jpg"
    }
    this.spks[6] = {
      "name": "Gloria Avecilla",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "Desembocaduras: 10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/GloriaAvecilla.jpg"
    }
    this.spks[5] = {
      "name": "Nivardo Trejo",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. De igual forma, ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado fue ponente del Diálogo de Violencias de Género en la Feria Internacional del Libro en Guadalajara, y además recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "Tsunami: 10:00 - 11:00",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/NivardoTrejo.jpg"
    }
    this.state = {
      show: false,
      id: 0,
      height:'close'
    }
  }

  component

  show(id) {
    this.setState({id: id, show: true, height:'open'});
  }

  close() {
    this.setState({id: 0, show: false, height:'close'});
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
          <div style={{display:`flex`, paddingTop:`4rem`}} className="speaker">
            <img alt={this.spks[this.state.id].name} src={this.spks[this.state.id].image}
            style={{cursor:`pointer`, flex:`1 1 auto`, maxWidth:`40vw`}}
            onClick={() => this.close()}
            className="speaker-img" />
            <div style={{alignSelf:`center`, flex:`1 1 auto`, paddingLeft:`4rem`}}>
              <h2 style={{marginBottom:`5px`}}>{this.spks[this.state.id].name}</h2>
              <h3 style={{fontWeight:`400`, fontSize:`2.5rem`, paddingTop:`0px`}}>{this.spks[this.state.id].schedule}</h3>
              <div style={{width:`55%`, paddingTop:`20px`}}>
                <p>{this.spks[this.state.id].text}</p>
                <div style={{display:`flex`, width:`50%`, justifyContent:`space-between`, alignItems:`center`, paddingTop:`20px`}}>
                  <a href="https://www.eventbrite.com.mx/e/marea-la-nueva-ola-tickets-96982470179" rel="noopener noreferrer" target="_blank">
                    <button id="eventbrite-widget-modal-trigger-96982470179">Regístrate</button>
                  </a>
                  <h6 id="mas" style={{marginBlockEnd: `0`}}>
                    <a href={this.spks[this.state.id].link} target="_blank" style={{textDecoration:`none`, color:`#fff`}}>
                      Conoce más
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          :
          null
        }
        <div style={{display:`flex`, width:`100%`, flexDirection:`column`,
          flexWrap: `wrap`, paddingTop:`4rem`, alignItems:`center`
        }} className={this.state.height + " speakers"}>
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
