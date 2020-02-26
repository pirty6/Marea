import React, { Component } from "react"

class Project extends Component {


  render() {
    return (
    <div className="project">
      <div>
        <img src={this.props.img} alt={this.props.name} style={{width:`43vw`}}/>
        <div style={{display:`flex`, flexDirection:`column`, alignItems:`center`}}>
          <h3 style={{marginBlockEnd:`0`}}>{this.props.name}</h3>
          <p>{this.props.text}</p>
          </div>
        </div>
    </div>
    )
  }
}

export default Project
