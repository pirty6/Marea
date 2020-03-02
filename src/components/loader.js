import React, { Component } from "react"
import Logo from "./logo"

class Loader extends Component {

  render() {
    return (
      <div style={{width:`100vw`, height:`100vh`, position:`fixed`,
      top: 0, left:`0`, display:`flex`, justifyContent:`center`,
      alignItems:`center`}}>
        <Logo />
      </div>
    )
  }
}

export default Loader
