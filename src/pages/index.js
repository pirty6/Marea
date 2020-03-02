import React, { Component } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
// import { Link } from "gatsby"

import Loader from "../components/loader"
import Hero from "../components/hero"
import NavBar from "../components/navbar"
import About from "../components/about"
import Speakers from "../components/speakers"
import Projects from "../components/projects"
import Contact from "../components/contact"

import "../components/index.css"

class IndexPage extends Component {
  state = {loading:true, show: false}
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  display = async (milliseconds = 3990) => {
    await this.sleep(milliseconds);
    this.setState({
      show:true
    });
  };

  componentDidMount() {
    this.wait(4000);
    this.display();

  }

  render() {
    return (
      <ParallaxProvider>
        <NavBar/>
        {this.state.loading ? <Loader/> : null}
        <Hero {...this.state}/>
        <About
        title="Acerca de"/>
        <Speakers
        title="Ponentes"/>
        <Projects />
        <Contact />
      </ParallaxProvider>
    )
  }
}

export default IndexPage
