import React, { Component } from "react"
import SpeakerClosed from "./speakerClosed"

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.spks = {}
    this.spks[1] = {
      "name": "Alondra Jímenez",
      "text": "Licenciada en Ciencias y Técnicas de la Comunicación, con formación dentro de la producción audiovisual. Trabajó como reportera para el Diario de Querétaro. Actualmente es coordinadora del área de prensa en DOQUMENTA y colaboradora en Girls at Films, una revista digital sobre mujeres en el cine.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "https://www.linkedin.com/in/alondra-jim%C3%A9nez-estrada-18207b179/",
      "image": "./images/AlondraJimenez.jpg"
    }
    this.spks[2] = {
      "name": "Lucia Martín López",
      "text": "Arquitecta, docente e investigadora que centra su trabajo en la vivienda. Estudió en la Universidad Politécnica de Madrid con mención internacional cum laude y Premio extraordinario de Doctorado. En el 2018 fue seleccionada para exponer en el Pabellón de España de la 16o Bienal de Arquitectura de Venecia.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "http://www.luciamartinlopez.com/",
      "image": "./images/LuciaMartin.jpg"
    }
    this.spks[3] = {
      "name": "Tania Hernández",
      "text": "Cineasta mexicana, con la licenciatura de Cine en Centro de Diseño, Cine y TV (Ciudad de México), y el posgrado en Edición y un máster en Documental de Creación, ambos en la Universidad Pompeu Fabra (Barcelona). Titixe, su primer largometraje documental, ha recogido premios y menciones.",
      "schedule": "Después del Temporal: Proyección del Documental Titixe. 5:30 - 7:00",
      "link": "https://www.taniahernandezvelas.co/TITIXE",
      "image": "./images/TaniaHernandez.JPG"
    }
    this.spks[11] = {
      "name": "Andrea Medina Rosas",
      "text": "Abogada, feminista y defensora de los derechos humanos. Ha participado en diversos procesos legales a favor de los derechos de las mujeres. También ha impartido talleres sobre derecho con perspectiva de género a operadores de justicia en México. El año pasado recibió la Medalla al Mérito Hermila Galindo.",
      "schedule": "Contracorriente: Del Papel a la Práctica. 10:10 - 11:30",
      "link": "http://congresos.juridicas.unam.mx/buenas-practicas-genero-dh/participantes#",
      "image": "./images/AndreaMedina.JPG"
    }
    this.spks[7] = {
      "name": "Elsa M. Treviño",
      "text": "Egresada de la licenciatura de Literatura Latinoamericana y doctora en Estudios Culturales Contemporáneos de la Universidad de Cambridge. Escritora, investigadora y educadora. Ha trabajado en la academia, en la industria editorial, en la televisión y como consultora independiente.",
      "schedule": "Desembocaduras: Puntos de Encuntro 11:30 - 1:30",
      "link": "https://cambridge.academia.edu/ElsaMTrevino",
      "image": "./images/ElsaMTrevino.jpg"
    }
    this.spks[6] = {
      "name": "Gloria Avecilla",
      "text": "Cuenta con la licenciatura en Psicología por la UAQ, la maestría en Neurociencias por la UNAM y el doctorado en Ciencias Biomédicas por la UNAM. Ha sido profesora e investigadora en en la UAQ por más de trece años. Ganó el Premio Alejandrina a la Investigación en el 2009.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "https://www.researchgate.net/profile/Gloria_Avecilla-Ramirez",
      "image": "./images/GloriaAvecilla.jpg"
    }
    this.spks[5] = {
      "name": "Nivardo Trejo",
      "text": "Licenciado en Lenguas Modernas del Español, con máster en Letras Hispánicas y en Estudios de Género. Sus investigaciones compartidas en foros han como sido el Congreso Internacional de Literatura Hispanoamericana y el Congreso Nacional de la Academia Mexicana de Estudios de Género.",
      "schedule": "Tsunami: Mujeres en la Literatura (Moderador). 3:00 - 5:30",
      "link": "https://iberoamericana.academia.edu/NivardoTrejo",
      "image": "./images/NivardoTrejo.jpg"
    }
    this.spks[13] = {
      "name": "Sofía García y Joshua Maza",
      "text": "Instructores certificados por Bukan School of Krav-Magá, el arte marcial israelí para la defensa personal. Con experiencia profesional impartiendo clases en Balvanera, Club Casablanca Juriquilla y el Tecnológico de Monterrey. Han impartido cursos de defensa personal para mujeres en Chihuahua y Querétaro.",
      "schedule": "Rompeolas: Taller de Defensa Personal. 11:30 - 1:30",
      "link": "http://kravmaga-bukan.com.mx/?fbclid=IwAR23BWZ8r6walo1SSm23Q5ijuyPyfuW0Tk3FWAfIIQowQ0cpstSutgSjYq8",
      "image": "./images/SofiayJoshua.jpg"
    }
    this.spks[9] = {
      "name": "Caminos",
      "text": "Proyecto artístico y social cuyo objetivo es ser un performance que protesta en contra de la segregación de todo aquello que es diferente o no cumple con los estereotipos sociales. Muestra una realidad: la discriminación en distintos ámbitos que se vive en nuestro país y se ignora o normaliza por la cotidianidad.",
      "schedule": "Apertura: 10:00 - 10:10",
      "link": "https://www.youtube.com/watch?v=501qMNTklXU&fbclid=IwAR00lmsSuxWfijVA30Dbl5Svwo3jhIR2ON_oF6dR5cQZVFSxNmYk5qQKMXE",
      "image": "./images/CAMINOS.jpg"
    }
    this.spks[10] = {
      "name": "Jaraneras Flor de Cardón",
      "text": "Colectivo y agrupación musical de son jarocho fundada en el 2016. Las jaraneras han virado el sentido de algunas letras tradicionales del son y han resignificando versos de canciones del género con el fin de que su música se transforme en un espacio incluyente desde donde se tejan lazos comunitarios y se transforme la realidad social.",
      "schedule": "Cuando el Río Suena: Sones de Protesta. 1:30 - 3:00",
      "link": "https://www.diariodequeretaro.com.mx/cultura/al-son-de-la-rebeldia-flor-de-cardon-3870151.html",
      "image": "./images/Jaraneras.jpeg"
    }
    this.spks[4] = {
      "name": "Beaumaris Eilean Santillan",
      "text": "Egresada en finanzas por la Escuela Bancaria y Comercial, fundadora y directora de Eilean Brand, marca de moda orgánica y sustentable, con una producción mexicana por entero. Fue una de las diez marcas latinoamericanas invitadas al fashion show Hi Tech Moda durante la New York Fashion Week 2020.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "https://eileanbrand.com/",
      "image": "./images/Beaumaris.jpeg"
    }
    this.spks[12] = {
      "name": "Diana Ibarra",
      "text": "Cuenta con la licenciatura en Filosofía; la maestría en Historia del Pensamiento, Historia y Filosofía; y el doctorado en Filosofía, con mención honorífica por parte de la UNAM. Fue coordinadora de la división de Estudios de Género y Familia en el Centro de Investigación Avanzada, en Querétaro.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "https://www.linkedin.com/in/diana-ibarra-4403b046/?originalSubdomain=mx",
      "image": "./images/Diana.jpeg"
    }
    this.spks[8] = {
      "name": "Liseth Reyes",
      "text": "Directora y líder del Centro de Diseño e ingeniería en México de Visteon, el mayor proveedor automotriz, enfocado en las cabinas digitales. Además, cuenta con experiencia como líder de empresas fuera del país, incluyendo años trabajando como líder en Japón.",
      "schedule": "Desembocaduras: Puntos de Encuentro. 11:30 - 1:30",
      "link": "https://www.linkedin.com/in/liseth-reyes-5b0546153/?originalSubdomain=mx",
      "image": "./images/Liseth.jpg"
    }
    this.spks[14] = {
      "name": "Gabriela Jauregui",
      "text": "Escritora, editora, traductora y crítica literaria. Cuenta con una maestría en Literatura Comparada, un máster en Bellas Artes en Escritura Creativa y un doctorado en Literatura Comparada. Considerada como una de las 39 escritoras más prometedoras en América Latina de menos de 40 años. Escritora de Tsunami (2018).",
      "schedule": "Tsunami: Mujeres en la Literatura. 3:00 - 5:30",
      "link": "https://sextopiso.mx/esp/autor/233/gabriela-jauregui",
      "image": "./images/Gabriela.jpg"
    }
    this.spks[15] = {
      "name": "Jimena González",
      "text": "Joven escritora y poeta en voz alta. Estudiante de Letras Hispánicas en la Facultad de Filosofía y Letras de la UNAM. Su poesía ha sido publicada en Casa del Lago Juan José Arreola, Museo Universitario del Chopo y Festival Lit&Luz 2017. En el 2017 publicó su primer poemario-fanzine Nombrar la sangre. Aparece en la antología Tsunami (2018).",
      "schedule": "Tsunami: Mujeres en la Literatura. 3:00 - 5:30",
      "link": "https://jimargo.tumblr.com/",
      "image": "./images/Jimena.png"
    }
    this.spks[16] = {
      "name": "Sara Uribe",
      "text": "Poeta mexicana, nacida en Querétaro. Licenciada en Filosofía. Ha publicado ocho libros de poesía y aparece en revistas y antologías de México, Perú, España, Reino Unido, Canadá y Estados Unidos. Ha sido becaria del Fondo Nacional para la Cultura y las Artes. Su obra aparece en la antología Tsunami (2018).",
      "schedule": "Tsunami: Mujeres en la Literatura. 3:00 - 5:30",
      "link": "http://www.elem.mx/autor/datos/1883",
      "image": "./images/Sara.jpg"
    }
    this.spks[17] = {
      "name": "Recrear",
      "text": "Recrear cocrea productos con artesanos de diversos estados de la república que trazan historias. La marca funciona como plataforma para dar apoyo a pequeños productores y comercializar sus productos para impulsar una alternativa laboral con base a la autogestión y el comercio justo.",
      "schedule": "Océano de Prendas: 10:00 - 7:30",
      "link": "https://www.recrear.mx/",
      "image": "./images/Recrear.jpg"
    }
    this.spks[18] = {
      "name": "Paloma Maza",
      "text": "Egresada del Tecnológico de Monterrey como médica cirujana. Ha realizado investigaciones en el Instituto de Neurobiología de la UNAM. Imparte talleres de salud y sexualidad. Colabora con Graveolens, un colectivo que aboga por los derechos sexuales y reproductivos de las mujeres.",
      "schedule": "Navegando: Taller de Cuidados Íntimos. 5:30 - 7:00",
      "link": "https://elperiodicodelassenoras.wordpress.com/2017/08/22/paloma-m-maza-manual-de-cuidados-intimos-para-senoritas-ii/",
      "image": "./images/Paloma.jpg"
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
      <div style={{display:`flex`, flexDirection:`column`, padding:`0px 20px`}} id='speakers'>
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
            <div style={{alignSelf:`center`, flex:`1 1 auto`, paddingLeft:`4rem`}}
            className='spk-text'>
              <h2 style={{marginBottom:`5px`}}>{this.spks[this.state.id].name}</h2>
              <h3 style={{fontWeight:`400`, fontSize:`2.5rem`, paddingTop:`0px`}}>{this.spks[this.state.id].schedule}</h3>
              <div style={{width:`55%`, paddingTop:`20px`}} className='more-txt'>
                <p>{this.spks[this.state.id].text}</p>
                <div style={{display:`flex`, width:`50%`, justifyContent:`space-between`, alignItems:`center`, paddingTop:`20px`}}
                className='button-spk'>
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
          {this.state.id !== 8 ? <SpeakerClosed
          image={this.spks[8].image}
          onClick={() => this.show(8)}/> : null}

          {this.state.id !== 9 ? <SpeakerClosed
          image={this.spks[9].image}
          onClick={() => this.show(9)}/> : null}

          {this.state.id !== 10 ? <SpeakerClosed
          image={this.spks[10].image}
          onClick={() => this.show(10)}/> : null}

          {this.state.id !== 11 ? <SpeakerClosed
          image={this.spks[11].image}
          onClick={() => this.show(11)}/> : null}

          {this.state.id !== 12 ? <SpeakerClosed
          image={this.spks[12].image}
          onClick={() => this.show(12)}/> : null}

          {this.state.id !== 13 ? <SpeakerClosed
          image={this.spks[13].image}
          onClick={() => this.show(13)}/> : null}

          {this.state.id !== 14 ? <SpeakerClosed
          image={this.spks[14].image}
          onClick={() => this.show(14)}/> : null}

          {this.state.id !== 15 ? <SpeakerClosed
          image={this.spks[15].image}
          onClick={() => this.show(15)}/> : null}

          {this.state.id !== 16 ? <SpeakerClosed
          image={this.spks[16].image}
          onClick={() => this.show(16)}/> : null}

          {this.state.id !== 17 ? <SpeakerClosed
          image={this.spks[17].image}
          onClick={() => this.show(17)}/> : null}

          {this.state.id !== 18 ? <SpeakerClosed
          image={this.spks[18].image}
          onClick={() => this.show(18)}/> : null}

        </div>
      </div>
    )
  }
}

export default Speakers
