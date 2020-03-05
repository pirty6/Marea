import React, { Component } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Link } from "gatsby"

import Hero from "../components/hero"
import NavBar from "../components/navbar"
import About from "../components/about"
import Speakers from "../components/speakers"
import Contact from "../components/contact"
import Contributors from "../components/contributors"
import Schedule from "../components/schedule"

import "../components/index.css"

class IndexPage extends Component {
  state = {loading:true}
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.wait(4000);
  }

  render() {
    return (
      <ParallaxProvider>
        <NavBar/>
        <Hero {...this.state}/>
        <About
        title="Acerca de"/>
        <Schedule />
        <Speakers
        title="Ponentes"/>
        <Contact />
        <Contributors />
      </ParallaxProvider>
    )
  }
}

export default IndexPage
