import React, { Component } from "react"
import { Link } from "gatsby"

import Hero from "../components/hero"
import NavBar from "../components/navbar"
import About from "../components/about"
import Speakers from "../components/speakers"

import "../components/index.css"

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      isEnglish: false,
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      isEnglish: !this.state.isEnglish
    });
  }

  render() {
    return (
      <>
        <NavBar
        handler={this.handler}
        language={this.state.isEnglish ? "ES" : "EN"}
        about={(this.state.isEnglish ? "About" : "Acerca De")}
        schedule={(this.state.isEnglish ? "Schedule" : "Programa")}
        speakers={(this.state.isEnglish ? "Speakers" : "Ponentes")}
        contributors={this.state.isEnglish ? "Contributors" : "Contribuyentes"}
        projects={this.state.isEnglish ? "Projects" : "Proyectos"}
        socials={this.state.isEnglish ? "Socials" : "Sociales"}
        contact={this.state.isEnglish ? "Contact" :  "Contacto"}/>
        <Hero />
        <About
        title={this.state.isEnglish ? "About" : "Acerca de"}/>
        <Speakers
        title={this.state.isEnglish ? "Speakers" : "Ponentes"}/>
        <Link to="/page-2/">Go to page 2</Link>
      </>
    )
  }
}

export default IndexPage
