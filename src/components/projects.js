import React from "react"
import Project from "./project"

const Projects = () => (
  <div style={{padding:`20px`}}>
    <div style={{display:`flex`, width:`100%`, justifyContent:`flex-end`}}>
      <h1 style={{flex:`1`, display:`flex`, justifyContent:`flex-end`}}>05</h1>
        <div style={{flex:`2`}}>
          <div style={{width:`100%`, borderBottom:`2px solid #fff`}}>
            <h1>&nbsp;Proyectos</h1>
          </div>
        </div>
      </div>
      <div style={{paddingTop:`3rem`}}>
        <Project
        img="./images/Imagen3.png"
        name="Proyecto 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        negative={-3}
        positive={20}/>
        <Project
        img="./images/Imagen4.png"
        name="Proyecto 2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        negative={-100}
        positive={30}/>
        <Project
        img="./images/Imagen5.png"
        name="Proyecto 3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        negative={-20}
        positive={20}/>

      </div>
  </div>
)

export default Projects
