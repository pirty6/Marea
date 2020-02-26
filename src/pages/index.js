import React, { Component } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Link } from "gatsby"

import Hero from "../components/hero"
import NavBar from "../components/navbar"
import About from "../components/about"
import Speakers from "../components/speakers"
import Projects from "../components/projects"

import "../components/index.css"

class IndexPage extends Component {
  render() {
    return (
      <ParallaxProvider>
        <NavBar/>
        <Hero />
        <About
        title="Acerca de"/>
        <Speakers
        title="Ponentes"/>
        <Projects />
      </ParallaxProvider>
    )
  }
}

export default IndexPage
